'use strict'

const db = require('APP/db')
const OrderItem = db.model('orderItems')


module.exports = require('express').Router()

    .get('/',
    (req, res, next) =>
        OrderItem.findAll()
            .then(orderItems => res.json(orderItems))
            .catch(next))

    .get('/:id',
    (req, res, next) =>
        OrderItem.findById(req.params.id)
            .then(orderItem => res.json(orderItem))
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

        const creatingOrderItem = OrderItem.create(req.body)

        Promise.all([findingUser, findingFace, creatingOrderItem])
            .then(([user, face, orderItem]) => {
                orderItem.setFace(face)
                if (user) orderItem.setUser(user) 
            })
            .then((orderItem) => res.json(orderItem)) 
            .catch(next)
    })  

    .put('/:id', (req, res, next) => {

        const findingOrderItem = OrderItem.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((orderItem) => {
            orderItem.update(req.body)
        })
        .then((orderItem) => res.json(orderItem)) 
        .catch(next)
    })

    .delete('/:id', (req, res, next) => {

        const deletingOrderItem = OrderItem.destroy({
            where: {
                id: req.params.id
            }
        })
        .catch(next)
    })

        
   



