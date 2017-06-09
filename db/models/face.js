'use strict'

const {STRING, INTEGER, DECIMAL, JSON, TEXT} = require('sequelize')

module.exports = db => db.define('face', {
  title: {
    type: STRING,
    allowNull: false,
    len: [0, 50]
  },

  image: {
    type: STRING,
    allowNull: true
  },

  description: {
    type: TEXT,
    allowNull: false,
    len: [1, 400]
  },

  price: {
    type: DECIMAL(10, 2),
    allowNull: false
  },

  quantity: {
    type: INTEGER,
    allowNull: false,
    validate: { min: 0 }
  }})
  
module.exports.associations = (Face, {Order, Cart, Review, CartItem, OrderItem}) => {
  Face.hasMany(Review)
  Face.belongsToMany(Order, {as: 'face', through: OrderItem}) //from this I can say face include Order
  Face.belongsToMany(Cart, {as: 'face', through: CartItem}) //from this I can say face include Cart
}