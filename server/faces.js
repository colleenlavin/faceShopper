'use strict'

const db = require('APP/db')
const Face = db.model('face')


module.exports = require('express').Router()
  .get('/',
    (req, res, next) =>
      Face.findAll()
        .then(faces => res.json(faces))
        .catch(next))

  .post('/',
    (req, res, next) =>
    {console.log('~~~~~~~~~~~~~hello');
    Face.create(req.body)
    .then(face => res.status(201).json(face))
    .catch(next)
    })

  .get('/:id',
    (req, res, next) =>
      Face.findById(req.params.id)
      .then(face => res.json(face))
      .catch(next))

  .put('/:id',
    (req, res, next) =>
    Face.findById(req.params.id)
    .then(face =>
      face.update(req.body)
      .then(updatedFace => res.json(updatedFace))
      )
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


