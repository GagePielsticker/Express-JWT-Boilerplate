'use strict'

/* Dependencies */
const { MongoClient } = require('mongodb')

module.exports = client => {
  /**
   * Connects mongoose to our mongodb database defined in the api settings
   * @returns {Promise}
   */
  client.connectDatabase = () => {
    return new Promise((resolve, reject) => {
      const {
        host,
        port,
        database,
        username,
        password
      } = client.apiSettings.mongodb
      const connectionString = `mongodb://${
        username ? `${username}:${password}@` : ''
      }${host}:${port}`

      const mClient = new MongoClient(connectionString, {
        useUnifiedTopology: true
      })

      mClient
        .connect()
        .then(d => {
          client.database = mClient.db(database)
          resolve()
        })
        .catch(reject)
    })
  }
}
