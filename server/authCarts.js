'use strict'

const db = require('APP/db')
const Cart = db.model('cart')
const CartItem = db.model('cartItem')
const Face = db.model('face')

module.exports = require('express').Router()

.param('userId', (req, res, next, userId) => {
  Cart.scope('populated')
    .findOrCreate({ where: { id: req.params.userId } })
    .spread((cart, created) => {
      req.cart = cart
      next()
    })
    .catch(next)

})

.get('/:userId',
  (req, res, next) =>
    res.json(req.cart)
      .catch(next))


// How can we make CartItem eagerly load with face?  I tried and couldn't make it work. -KS

.post('/:userId', (req, res, next) => {  
  CartItem.findOrCreate({
    where: {
      cart_id: req.cart.id,
      face_id: req.body.face.id,
    }
  })
    .spread((cartItem, created) => {
      let newQuant = created? Number(req.body.quantity) : cartItem.quantity + Number(req.body.quantity)
      cartItem.update({quantity: newQuant, price: req.body.face.price})
      return [cartItem, created]
    })
    .spread((cartItem, created) => {
      res.json({cartItem:cartItem, created:created})
    })
    .catch(next)
})


  // router.put('/:sessionId/:cartItemId', (req, res, next) =>
  //   req.cartItem.update({ quantity: req.body.quantity })
  //     .then((cartItem) => res.json(cartItem))
  //     .catch(next))


  .get('/:userId/subtotal',
  (req, res, next) =>
    req.requestedCart
      .then(cart => res.json(cartItems.reduce(
        (acc, cur) => acc.price * acc.quantity + cur.price * cur.quantity, 0
      ))
        .catch(next)))