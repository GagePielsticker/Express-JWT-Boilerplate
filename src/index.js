/* Dependencies */
const express = require('express')
const app = express()
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const jwtValidator = require('express-jwt')

/* Configure our rest client */
const client = {
  apiSettings: require('./settings/settings.json'),
  appid: process.env.APPID || 1,
  server: require('http').createServer(app)
}

app.use(helmet())
app.use(morgan('common'))
app.set('trust proxy', 1)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/* JWT Validation and erroring */
app.use(jwtValidator({
  secret: client.apiSettings.jwt.secret,
  algorithms: [client.apiSettings.jwt.algorithm]
})
  .unless({
    path: client.apiSettings.jwt.ignored_routes
  })
)

/* catchall authentication error handling */
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ type: 'Authorization', errors: ['Invalid authorization token.'] })
  }
  console.log(err.name)
  next()
})

/* Require our custom libs and pass our client */
require('./library/database.js')(client)

/* Routing */

// Public endpoints
app.use('/', require('./routes/public/index.js')(client))
app.use('/auth', require('./routes/public/auth.js')(client))

/* catchall for authenticated but not found error handling */
app.get('*', (req, res) => {
  res.status(404).send('Endpoint does not exist.')
})

/* Listen on http */
client.server.listen(client.apiSettings.api.port, () => {
  console.log(`API instance :: ${client.appid} :: port :: ${client.apiSettings.api.port}!`)

  // Connection to mongodb
  console.log('Attempting to connect to database')
  client.connectDatabase()
    .then(() => {
      console.log('Connected database.')
    })
    .catch(e => {
      console.log(`Failed to connect to database :: ${e}`)
      process.exit(1)
    })
})
