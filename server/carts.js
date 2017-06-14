
'use strict'

const db = require('APP/db')
const Cart = db.model('cart')
const CartItem = db.model('cartItem')


module.exports = require('express').Router()
  // .get('/:sessionId',
  //   (req, res, next) =>
  //   Cart.findOrCreate({where: {sessionId: req.params.sessionId})

  // .param('sessionId', (req, res, next, sessionId) =>
  //   Cart.scope('populated')
  //   .findOrCreate({where: {sessionId: req.params.sessionId}})
  //   .spread((cart, created) => cart)
  //   .then(cart =>{
  //     req.requestedCart = cart
  //     next()
  //     return null
  //   })
  //   .catch(next))

  // .get('/:sessionId', (req, res, next) =>
  //   res.json(req.requestedCart)
  //   .catch(next))

<<<<<<< HEAD
  .post('/:sessionId', 
    (req, res, next) =>
    CartItem.create({cart_id: req.requestedCart.id, face_id: req.body.face_id})
    .then((cartItem)=>res.json(cartItem))
    .catch(next))
=======
  // .get('/:sessionId/subtotal', (req, res, next) =>
  //   req.requestedCart
  //   .then(cart => res.json(cartItems.reduce(
  //     (acc, cur) => acc.price * acc.quantity + cur.price * cur.quantity, 0
  //     ))
  //   )
  //  .catch(next))
>>>>>>> 035f234d9d9d620fbff121f9ade10940c5433688

  // .post('/:sessionId',
  //   (req, res, next) =>
  //   CartItem.create({cartId: req.requestedCart.id, faceId: req.body.faceId, quantity: req.body.quantity, price: req.body.price})
  //   .then((cartItem)=>res.json(cartItem))
  //   .catch(next))

  // .put('/:sessionId/:faceId/add', (req, res, next) =>
  //     CartItem.findOne({
  //       where: {
  //         cartId: req.requestedCart.id,
  //         faceId: req.params.faceId
  //       }
  //     })
  //     .then(item =>
  //       item.update(
  //         {quantity: item.quantity + 1}
  //         )
  //       )
  //     .then((updatedItem) => res.json(updatedItem))
  //     .catch(next))

  //   .put('/:sessionId/:faceId/subtract', (req, res, next) =>
  //       CartItem.findOne({
  //         where: {
  //           cartId: req.requestedCart.id,
  //           faceId: req.params.faceId
  //         }
  //       })
  //       .then(item =>
  //         item.update(
  //           {quantity: item.quantity - 1}
  //           )
  //         )
  //       .then((updatedItem) => res.json(updatedItem))
  //       .catch(next))

  // .delete('/:sessionId/:faceId', (req, res, next) =>
  //   CartItem.destroy({
  //     where: {
  //       cartId: req.requestedCart.id,
  //       faceId: req.params.faceId
  //     }
  //   })
  //   .then(() => res)
  //   .catch(next)
  //   )
