'use strict'

const db = require('APP/db')
const Cart = db.model('cart')
const CartItem = db.model('cartItem')

module.exports = require('express').Router()
  // .get('/:sessionId', 
  //   (req, res, next) =>
  //   Cart.findOrCreate({where: {sessionId: req.params.sessionId})
  //   //defaults?
  //     .spread((cart, created) => {
  //         return cart
  //       })
  //     .catch(next))

  .param('sessionId', (req, res, next, sessionId) => 
    Cart.scope('populated')
    .findOrCreate({where: {sessionId: req.params.sessionId}})
    .spread((cart, created) => cart)
    .then(cart =>
      req.requestedCart = cart
      next()
      return null
    })
    .catch(next))

  .get('/:sessionId', (req, res, next) =>
    res.json(req.requestedCart)
    .catch(next))

  .get('/:sessionId/subtotal', (req, res, next) =>
    req.requestedCart
    .then(cart => res.json(cartItems.reduce(
      (acc, cur) => acc.price * acc.quantity + cur.price * cur.quantity, 0
      ))
   .catch(next))

  .post('/:sessionId', (req, res, next) =>
    CartItem.create({cartId: req.requestedCart.id, faceId: req.body.faceId, quantity: req.body.quantity, price: req.body.price})
    .then(res.json(requestedCart))
    .catch(next))

  .put('/:sessionId/:faceId/add', (req, res, next) => 
    CartItem.findOne({
      where: {
        cartId: req.requestedCart.id,
        faceId: req.params.faceId
      }
    })
    .then(item => 
      item.update(
        {quantity: item.quantity + 1}
        )
      )
    .then(() => next())
    .catch(next))

    .put('/:sessionId/:faceId/subtract', (req, res, next) => 
    CartItem.findOne({
      where: {
        cartId: req.requestedCart.id,
        faceId: req.params.faceId
      }
    })
    .then(item => 
      item.update(
        {quantity: item.quantity - 1}
        )
      )
    .then(() => next())
    .catch(next))

  .delete('/:sessionId/:faceId', (req, res, next) =>
    CartItem.destroy({
      where: {
        cartId: req.requestedCart.id,
        faceId: req.params.faceId
      }
    })
    .then(() => next())
    .catch(next))


