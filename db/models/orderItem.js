'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('orderItem', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.FLOAT
  }
})

module.exports.associations = (OrderItem, {Order, Cart, Face}) => {
  OrderItem.belongsTo(Order)
  OrderItem.belongsTo(Face, {
      foreignKey: { allowNull: false }, 
  })
}
