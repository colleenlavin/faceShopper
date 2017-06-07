'use strict'

const db = require('APP/db')
const Order = db.model('orders')


module.exports = require('express').Router()

    .get('/',
    (req, res, next) =>
        Order.findAll()
            .then(order => res.json(order))
            .catch(next))

    .post('/',
    (req, res, next) => { // Do we want to create a temporary user if none exists? 
        console.log('got here')
        if (req.body.userId) {
            const findingUser = User.findOne({
                where: {
                    id: req.body.userId
                }
            })
        }

        const creatingOrder = Order.create(req.body)

        Promise.all([findingUser, creatingOrder])
            .then(([user, order]) => {
                if (user) order.setUser(user)
            })
            .then(order => res.json(order))
            .catch(err => { if (err) console.log(err) })
    })

    .get('/:id',
    (req, res, next) =>
        Order.findById(req.params.id)
            .then(order => res.json(order))
            .catch(next))

   

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

        const deletingOrder = Order.destroy({
            where: {
                id: req.params.id
            }
        })
            .catch(next)
    })