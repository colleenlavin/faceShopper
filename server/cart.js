'use strict'

const db = require('APP/db')
const CartItem = db.model('cartItem')

const {mustBeLoggedIn, selfOnly, forbidden} = require('./auth.filters')

module.exports = require('express').Router()

    //unsecure:
    .get('/:id/',
    (req, res, next) =>
        CartItem.findAll()
            .then(CartItems => res.json(CartItems))
            .catch(next))
    

    //unsecure:
    .put('/:id/:cartId', {cartId, quantity}), 
    (req, res, next ) =>  
        CartItem.find( {
            where: {id: req.params.cartId}
        })
        .then(cartItem => cartItem.update(quantity))
        .catch(next)


    //secure:
    .put('/:id/:cartId', {cartId, quantity}), selfOnly,
    (req, res, next ) =>  
        CartItem.find( {
            where: {id: req.params.cartId}
        })
        .then(cartItem => cartItem.update(quantity))
        .catch(next)

    
        
    



    
       

    .get('/:id',
    (req, res, next) =>
        CartItem.findById(req.params.id)
            .then(CartItem => res.json(CartItem))
            .catch(next))

    .post('/', (req, res, next) => {

        const findingFace = Face.findOne({
            where: {
                id: req.body.faceId
            }
        })

        if (req.body.userId) {
            const findingUser = User.findOne({
                where: {
                    id: req.body.userId
                }
            })
        }

        const creatingCartItem = CartItem.create(req.body)

        Promise.all([findingUser, findingFace, creatingCartItem])
            .then(([user, face, CartItem]) => {
                CartItem.setFace(face)
                if (user) CartItem.setUser(user) 
            })
            .then((CartItem) => res.json(CartItem)) 
            .catch(next)
    })  

    .put('/:id', (req, res, next) => {

        const findingCartItem = CartItem.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((CartItem) => {
            CartItem.update(req.body)
        })
        .then((CartItem) => res.json(CartItem)) 
        .catch(next)
    })

    .delete('/:id', (req, res, next) => {

        const deletingCartItem = CartItem.destroy({
            where: {
                id: req.params.id
            }
        })
        .catch(next)
    })