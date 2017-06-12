
'use strict'

import {selfOrSessionOnly} from './auth.filters'

const db = require('APP/db')
const Cart = db.model('cart')
const CartItem = db.model('cartItem')


module.exports = require('express').Router()
  
  .param('sessionId', (req, res, next, sessionId) => {
    if (req.params.userId == 'NOTFOUND') {
      Cart.scope('populated')
        .findOrCreate({ where: { sessionId: req.params.sessionId } })
        .spread((cart, created) => cart)
        .then(cart => {
          req.requestedCart = cart
          next()
          return null
        })
        .catch(next)
    } 
  })

  .param('userId', (req, res, next, userId) => {
    if (req.params.userId != 'NOTFOUND') {
      req.user = {id: userId}
      Cart.scope('populated')
        .findOrCreate({ where: { user_id: req.params.userId } })
        .spread((cart, created) => cart)
        .then(cart => {
          req.requestedCart = cart
          next()
          return null
        })
        .catch(next)
    } else {
      req.user = {id: ''}
    }
  })
  


  .get('/:userId/:sessionId', selfOrSessionOnly, (req, res, next) =>
    res.json(req.requestedCart)
      .catch(next))

    .get('/:userId/:sessionId/subtotal', (req, res, next) =>
      req.requestedCart
        .then(cart => res.json(cartItems.reduce(
          (acc, cur) => acc.price * acc.quantity + cur.price * cur.quantity, 0
        ))
        )
        .catch(next))

    .post('/:userId/:sessionId', selfOrSessionOnly,
    (req, res, next) =>
      CartItem.create({ cartId: req.requestedCart.id, faceId: req.body.faceId, quantity: req.body.quantity, price: req.body.price })
        .then((cartItem) => res.json(cartItem))
        .catch(next))

    .put('/:userId/:sessionId/:faceId/add', selfOrSessionOnly, (req, res, next) =>
      CartItem.findOne({
        where: {
          cartId: req.requestedCart.id,
          faceId: req.params.faceId
        }
      })
        .then(item =>
          item.update(
            { quantity: item.quantity + 1 }
          )
        )
        .then((updatedItem) => res.json(updatedItem))
        .catch(next))

    .put('/:userId/:sessionId/:faceId/subtract', selfOrSessionOnly, (req, res, next) =>
      CartItem.findOne({
        where: {
          cartId: req.requestedCart.id,
          faceId: req.params.faceId
        }
      })
        .then(item =>
          item.update(
            { quantity: item.quantity - 1 }
          )
        )
        .then((updatedItem) => res.json(updatedItem))
        .catch(next))

    .delete('/:userId/:sessionId/:faceId', selfOrSessionOnly, (req, res, next) =>
      CartItem.destroy({
        where: {
          cartId: req.requestedCart.id,
          faceId: req.params.faceId
        }
      })
        .then(() => res)
        .catch(next)
    )

