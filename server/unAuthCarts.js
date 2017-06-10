'use strict'

const db = require('APP/db')
const Cart = db.model('cart')
const CartItem = db.model('cartItem')

module.exports = require('express').Router()

 .param('sessionId', (req, res, next, sessionId) => 
    Cart.scope('populated')
    .findOrCreate({where: {sessionId: req.params.sessionId}})
    .spread((cart, created) => {
      req.cart = cart
      })
    .catch(next))

  .param('cartItemId', (req, res, next, cartItemId) => {
    CartItem.findOrCreate( {where: {id:cartItemId}})
    .spread((cartItem, created) => {
      req.cartItem = cartItem
    })
    .catch(next)
  })


  .get('/:sessionId', 
    (req, res, next) =>
    res.json(req.cart)
    .catch(next))

  .get('/:sessionId', (req, res, next) =>
      res.json(req.requestedCart)
    .catch(next))

  .put('/:sessionId/:cartItemId', (req, res, next) => 
      req.cartItem.update({quantity: req.body.quantity})
      .then((cartItem) => res.json(cartItem))
      .catch(next)

  .post('/:sessionId/:cartItemId', (req, res, next) => 
      req.cartItem => res.json(cartItem))
      .catch(next)

  // .get('/:sessionId/subtotal', 
  // (req, res, next) =>
  //     req.requestedCart
  //     .then(cart => res.json(cartItems.reduce(
  //       (acc, cur) => acc.price * acc.quantity + cur.price * cur.quantity, 0
  //       ))
  //   .catch(next))