'use strict'

/**
 * Dependencies
 */
const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = client => {
  /* Our main index endpoint */
  router.get('/', (req, res) => {
    res.send('Welcome to the auth endpoint.')
  })

  /* Our registration endpoint */
  router.post(
    '/register',
    [
      body('username').isLength({ min: 3, max: 32 }),
      body('password').isLength({ min: 5, max: 100 })
    ],
    async (req, res) => {
      // If validation error occured, error with errors
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ type: 'validation', errors: errors.array() }) // Return validation errors
      }

      // Check if username in use
      const userNameCheck = await client.database
        .collection('users')
        .findOne({ username: req.body.username })
      if (userNameCheck) {
        return res
          .status(400)
          .json({ type: 'database', errors: ['username already in use.'] })
      }

      // Hash our password
      const hash = await bcrypt.hash(
        req.body.password,
        client.apiSettings.password_hash_rounds
      )
      if (!hash) {
        return res
          .status(500)
          .json({ type: 'server', errors: ['Internal server error.'] })
      }

      // Write user account to database
      await client.database
        .collection('users')
        .insert({
          username: req.body.username,
          password: hash
        })
        .then(res.status(200).json({ status: 'success' }))
    }
  )

  /* Our authentication endpoint */
  router.post(
    '/login',
    [
      body('username').isLength({ min: 3, max: 32 }),
      body('password').isLength({ min: 5, max: 100 })
    ],
    async (req, res) => {
      // If validation error occured, error with errors
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ type: 'validation', errors: errors.array() }) // Return validation errors
      }

      // Check if username exist
      const userEntryCheck = await client.database
        .collection('users')
        .findOne({ username: req.body.username })
      if (!userEntryCheck) {
        return res
          .status(400)
          .json({ type: 'database', errors: ['Invalid username or password.'] })
      }

      // Check password
      const validation = await bcrypt.compare(
        req.body.password,
        userEntryCheck.password
      )
      if (!validation) {
        return res
          .status(400)
          .json({ type: 'database', errors: ['Invalid username or password.'] })
      }

      // Create and sign a JWT containing the user ID
      const authToken = jwt.sign(
        { username: userEntryCheck.username },
        client.apiSettings.jwt.secret,
        {
          algorithm: client.apiSettings.jwt.algorithm,
          expiresIn: client.apiSettings.jwt.expiresIn
        }
      )

      res.status(200).json({ status: 'success', authToken, expiresIn: client.apiSettings.jwt.expiresIn })
    }
  )

  return router
}
