'use strict'

const Sequelize = require('sequelize')


module.exports = db => db.define('order', {
  sessionId: Sequelize.STRING,
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  name: {
    type: Sequelize.STRING
  },
  address1: {
    type: Sequelize.STRING
  },
  address2: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  zip: {
    type: Sequelize.INTEGER
  },
  ccn: {
    type: Sequelize.INTEGER,
    isCreditCard: true,
    allowNull: true
  },
  expDate: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  ccv: {
    type: Sequelize.INTEGER
  }
}, {
  instanceMethods: {
    getSubtotal: function() {
      let subtotal = 0
      OrderItem.findAll({
        where: {
          orderId: this.id
        }
      }).then(items => {
        items.forEach(item => {
          subtotal += item.price * item.quantity
        })
      })
      return subtotal
    }
  },
  scopes: {
    populated: () => ({
      include: [{
        model: db.model('orderItem')
      }]
    })
  }
})

module.exports.associations = (Order, {User, Face, OrderItem}) => {
  Order.belongsTo(User)
  Order.belongsToMany(Face, {through: OrderItem})
  Order.hasMany(OrderItem) //still necessary?
}




