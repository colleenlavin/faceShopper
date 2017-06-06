'use strict'

const {STRING, INTEGER, DECIMAL, JSON, TEXT} = require('sequelize')

module.exports = db => db.define('reviews', {
  title: {
    type: STRING,
    len: [0, 100]
  },
  body: {
    type: TEXT,
    len: [0, 400]
  },
  stars: {
    type: INTEGER,
    allowNull: false,
    validate: { min: 0, max: 5 }
  }
})
