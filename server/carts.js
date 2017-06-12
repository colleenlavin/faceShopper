'use strict'

const db = require('APP/db')
const Cart = db.model('cart')
const CartItem = db.model('cartItem')

module.exports = require('express').Router()
  // .get('/:sessionId', 
  //   (req, res, next) =>
  //   Cart.findOrCreate({where: {sessionId: req.params.sessionId}
  //   //defaults?
  //     .spread((cart, created) => {
  //         return cart
  //       })
  //     .catch(next))

  // .param('sessionId', (req, res, next, sessionId) => 
  //   Cart.scope('populated')
  //   .findOrCreate({where: {sessionId: req.params.sessionId}})
  //   .spread((cart, created) => cart)
  //   .then(cart =>
  //     req.requestedCart = cart
  //     next()
  //     return null
  //   })
  //   .catch(next))

  // .get('/:sessionId', (req, res, next) =>
  //     res.json(req.requestedCart)
  //   .catch(next))

  // .get('/:sessionId/subtotal', (req, res, next) =>
  //     req.requestedCart
  //     .then(cart => res.json(cartItems.reduce(
  //       (acc, cur) => acc.price * acc.quantity + cur.price * cur.quantity, 0
  //       ))
  //   .catch(next))