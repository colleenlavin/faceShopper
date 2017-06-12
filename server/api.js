'use strict'

const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => {
    console.log("req ", req.sessionID)
    res.json({sessionId: req.sessionID})
  })
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/faces', require('./faces'))
  .use('/carts', require('./unAuthCarts'))


// No routes matched? 404.
api.use((req, res) => res.status(404).end())
