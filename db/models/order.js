'use strict'

const Sequelize = require('sequelize');
const OrderItem = require('./orderItem')

module.exports = db => db.define('orders', {
  status: {
    type: Sequelize.STRING,
    defaultValue: 'Draft'
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
}, {
  instanceMethods: {
    getSubtotal: function() {
      let subtotal = 0;
      OrderItem.findAll({
        where: {
          orderId: this.id
        }
      }).then ((items) => {
        items.forEach(item => {
          subtotal += item.price * item.quantity
        })
      })
      return subtotal;
    }
  }
})

// figure this bit out later:
// module.exports.associations = (Order, {User}) => {
//   Order.belongsTo(User)
// }
