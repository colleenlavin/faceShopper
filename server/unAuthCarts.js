'use strict'

const db = require('APP/db')
const Cart = db.model('cart')
const CartItem = db.model('cartItem')
const Face = db.model('face')

var router = require('express').Router()

module.exports = router

  router.param('sessionId', (req, res, next, sessionId) => {
    Cart.scope('populated')
      .findOrCreate({ where: { sessionId: req.params.sessionId } })
      .spread((cart, created) => {
        console.log("cart is ", cart)
        req.body.cart = cart
      })
      .catch(next)
    next()
  })

  // router.param('cartItemId', (req, res, next, cartItemId) => {
  //   CartItem.findOrCreate({ where: { id: cartItemId } })
  //     .spread((cartItem, created) => {
  //       req.cartItem = cartItem
  //     })
  //     .catch(next)
  //   next()
  // })

  router.get('/:sessionId',
  (req, res, next) =>
    res.json(req.cart)
      .catch(next))

  router.post('/:sessionId', (req, res, next) => {
    console.log("req.body ", req.body)
    console.log("req.cart ", req.body.cart)
    CartItem.findOrCreate({
      where: {
        cart_id: req.cart.id,
        face_id: req.body.faceId
      }
    })
      .spread((cartItem, created) => {
        if (!created) cartItem.increment()
        res.json(cartItem)
      })
      .catch(next)
  })

  // router.put('/:sessionId/:cartItemId', (req, res, next) =>
  //   req.cartItem.update({ quantity: req.body.quantity })
  //     .then((cartItem) => res.json(cartItem))
  //     .catch(next))



  // .get('/:sessionId/subtotal', 
  // (req, res, next) =>
  //     req.requestedCart
  //     .then(cart => res.json(cartItems.reduce(
  //       (acc, cur) => acc.price * acc.quantity + cur.price * cur.quantity, 0
  //       ))
  //   .catch(next))