'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('orderItems', {
  quantity: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.FLOAT
  }
})

module.exports.associations = (OrderItem, {Order, Face}) => {
  OrderItem.belongsTo(Order)
  OrderItem.belongsTo(Face)
}
