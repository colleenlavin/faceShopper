'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('orders', {
  status: {
    type: Sequelize.STRING,
    defaultValue: 'Draft'
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
})

// figure this bit out later:
// module.exports.associations = (Order, {User}) => {
//   Order.belongsTo(User)
// }
