'use strict'

const db = require('APP/db')
const Cart = db.model('cart')
const CartItem = db.model('cartItem')
const Order = db.model('order')
const OrderItem = db.model('orderItem')

module.exports = require('express').Router()
  .post('/',
  (req, res, next) => {
    // Specific names of req.body properties may need to be updated based on structure of axios request!
    // If this isn't working try that
    Order.create({
      sessionId: req.body.cart.sessionId
    })
      .then(order => {
        let itemPromises = []
        req.body.cartItems.map(cartItem => {
          itemPromises.push(OrderItem.create({
            order_id: order.id,
            quantity: cartItem.quantity,
            face_id: cartItem.face_id,
            price: cartItem.price
          }))})
          Promise.all(itemPromises)
            .then(orderItems => res.status(201).json(order))
            .catch(next);
      })
      .catch(next);
  }
  )
