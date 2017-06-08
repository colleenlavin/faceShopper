'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('cartItem', {
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
}, {
      classMethods: {
          migrate(unAuthCartId, userCartId) {    //this can get called like so: CartItem.migrate(getUnAuthCartId(sessionId), getUserCartId(userId))
              this.update(
                  { cartId: userCartId },
                  { where: {cartId: unAuthCartId} })
          }
      }
  })

module.exports.associations = (CartItem, {Cart, Face}) => {
  CartItem.belongsTo(Cart, {
      foreignKey: { allowNull: false }, 
  })
  CartItem.belongsTo(Face, {
      foreignKey: { allowNull: false }, 
  })
}
