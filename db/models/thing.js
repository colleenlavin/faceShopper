'use strict'

const {STRING, INTEGER, DECIMAL, JSON} = require('sequelize')

module.exports = db => db.define('things', {
  title: STRING,
  image: JSON,
  description: STRING,
  price: DECIMAL(10,2),
  quantity: INTEGER,
})

module.exports.associations = (Thing, {User, Favorite}) => {
  Thing.belongsToMany(User, {as: 'lovers', through: Favorite})
}
