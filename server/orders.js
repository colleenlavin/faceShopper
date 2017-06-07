'use strict'

const db = require('APP/db')
const Order = db.model('orders')


module.exports = require('express').Router()

    .get('/',
    (req, res, next) => // think of security who should be able to find which orders --- KHAM
        Order.findAll()
            .then(order => res.json(order))
            .catch(next))

    .post('/',
    (req, res, next) => { // Do we want to create a temporary user if none exists? 
        console.log('got here')
        // use req.user if not admin, for admin use req.body.userId. So someone cannot make an order on someone else's behalf unless admin -- KHAM
        if (req.body.userId) {
            const findingUser = User.findOne({ // findById -- KHAM
                where: {
                    id: req.body.userId
                }
            })
        }

        const creatingOrder = Order.create(req.body)

        Promise.all([findingUser, creatingOrder])
            .then(([user, order]) => {
                if (user) order.setUser(user) // return this because async -- KHAM
            })
            .then(order => res.json(order)) // status of 201 created -- KHAM
            .catch(err => { if (err) console.log(err) }) // use next to use error handling middleware -- KHAM
    })
    // use router.param -- KHAM
    // .param('id', (req, res, next, id)=> {
    //     // findById
    //     // if order is undefined, send 404 maybe
    //     // req.order = order
    //     // next()
    // })
    .get('/:id',
    (req, res, next) =>
        // admin or self -- KHAM
        Order.findById(req.params.id)
            .then(order => res.json(order))
            .catch(next))

   

    .put('/:id', (req, res, next) => {
        // admin or self -- kHAM
        const findingOrderItem = OrderItem.findOne({ // Use order here not orderItem -- KHAM
            where: {
                id: req.params.id
            }
        })
            .then((orderItem) => {
                orderItem.update(req.body) // req.order.addOrderItem({})
            })
            .then((orderItem) => res.json(orderItem))
            .catch(next)
    })

    .delete('/:id', (req, res, next) => {
        // only admin *maybe* -- KHAM
        const deletingOrder = Order.destroy({ // so here we would use destroy instance method -- KHAM
            where: {
                id: req.params.id
            }
        })
            .catch(next)
    })