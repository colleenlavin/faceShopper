'use strict'

const {STRING, INTEGER, DECIMAL, JSON, TEXT} = require('sequelize')

module.exports = db => db.define('faces', {
  title: STRING,
  image: JSON,
  description: TEXT,
  price: DECIMAL(10,2),
  quantity: INTEGER,
})

// module.exports.associations = (Thing, {User, Favorite}) => {
//   Thing.belongsToMany(User, {as: 'lovers', through: Favorite})
// }
