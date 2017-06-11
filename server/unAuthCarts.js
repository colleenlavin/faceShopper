'use strict'

const db = require('APP/db')
const Cart = db.model('cart')
const CartItem = db.model('cartItem')
const Face = db.model('face')

module.exports = require('express').Router()

.param('sessionId', (req, res, next, sessionId) => {
  Cart.scope('populated')
    .findOrCreate({ where: { sessionId: req.params.sessionId } })
    .spread((cart, created) => {
      req.cart = cart
      next()
    })
    .catch(next)

})

.param('cartItemId', (req, res, next, cartItemId) => {
  CartItem.findOrCreate({ where: { id: cartItemId } })
    .spread((cartItem, created) => {
      req.cartItem = cartItem
       next()
    })
    .catch(next)
  
})

.get('/:sessionId',
  (req, res, next) =>
    res.json(req.cart)
      .catch(next))


// How can we make CartItem eagerly load with face?  I tried and couldn't make it work. -KS

.post('/:sessionId', (req, res, next) => {  
  CartItem.findOrCreate({
    where: {
      cart_id: req.cart.id,
      face_id: req.body.face.id
    }
  })
    .spread((cartItem, created) => {
      if (!created) cartItem.increment() // This isn't working right now.  It seems to always create a new one. -KS
      return cartItem
    })
    .then((cartItem) => {
      res.json(cartItem)
    })
    .catch(next)
})


  // router.put('/:sessionId/:cartItemId', (req, res, next) =>
  //   req.cartItem.update({ quantity: req.body.quantity })
  //     .then((cartItem) => res.json(cartItem))
  //     .catch(next))


  .get('/:sessionId/subtotal',
  (req, res, next) =>
    req.requestedCart
      .then(cart => res.json(cartItems.reduce(
        (acc, cur) => acc.price * acc.quantity + cur.price * cur.quantity, 0
      ))
        .catch(next)))