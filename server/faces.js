'use strict'

const db = require('APP/db')
const Face = db.model('faces')


module.exports = require('express').Router()
  .get('/',
    (req, res, next) =>
      Face.findAll()
        .then(faces => res.json(faces))
        .catch(next))

  .get('/:id',
    (req, res, next) =>
      Face.findById(req.params.id)
      .then(face => res.json(face)) // what about if face === undefined -- KHAM
      .catch(next))
