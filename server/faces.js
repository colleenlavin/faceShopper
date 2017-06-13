'use strict'

const db = require('APP/db')
const Face = db.model('face')


module.exports = require('express').Router()
  .get('/',
    (req, res, next) =>
      Face.findAll()
        .then(faces => res.json(faces))
        .catch(next))



  .get('/:id',
    (req, res, next) =>
      Face.findById(req.params.id)
      .then(face => res.json(face))
      .catch(next))

  .put('/:id',
    (req, res, next) =>
    Face.findById(req.params.id)
    .then(face =>
      face.update(
        {quantity: req.body.quantity}
        ) 
      )
    .then(updatedFace => res.json(updatedFace))
    .catch(next))

  .delete('/:id', 
    (req, res, next) =>
    Face.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => res.sendStatus(200))
    .catch(next))


