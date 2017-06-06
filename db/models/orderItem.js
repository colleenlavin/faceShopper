'use strict'

const Sequelize = require('sequelize')


module.exports = db => db.define('orderItems', {
  productId: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  productPrice: {
    type: Sequelize.FLOAT
  }
})

// figure this bit out later:
// module.exports.associations = (OrderItem, {Order, Product}) => {
//   OrderItem.belongsTo(Order)
// }