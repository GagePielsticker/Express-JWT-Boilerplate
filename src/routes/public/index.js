
'use strict'

/* Dependencies */
const express = require('express')
const router = express.Router()

module.exports = client => {
  /* Our main index endpoint */
  router.get('/', (req, res) => {
    res.status(200).send('Welcome to the api.')
  })

  /* Our healthcheck endpoint */
  router.get('/healthcheck', (req, res) => {
    res.status(200)
  })

  return router
}
