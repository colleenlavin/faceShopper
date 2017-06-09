'use strict'

const Sequelize = require('sequelize')


module.exports = db => db.define('cart', {
  sessionId: Sequelize.STRING, //we have to switch to express sessions to make sure we have this
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
}, {
  instanceMethods: {
    getSubtotal: function() {
      let subtotal = 0
      CartItem.findAll({
        where: {
          cartId: this.id
        }
      }).then(items => {
        items.forEach(item => {
          subtotal += item.price * item.quantity
        })
        return subtotal
      })  
    }
  }, 
  classMethods: {
      getUnAuthCartId: function(sessionId) {
        this.findOne({
            where: {sessionId} // does this destructuring syntax work?
        })
        .then( cart => {
            return cart.id
        })
      },
      getUserCartId: function(userId) {    //Are these really two separate functions?  Could they be DRYd out?
        this.findOne({
            where: {userId} // does this destructuring syntax work? 
        })
        .then( cart => {
            return cart.id
        })
      }
  }
})

module.exports.associations = (Cart, {User, Face, CartItem}) => {
  Cart.belongsTo(User)
  Cart.belongsToMany(Face, {through: CartItem})
  Cart.hasMany(CartItem)


  // Cart  belongs to many Face through CartItem <-- suggestion from Kate, makes this possible
  // Cart.addFaces(we can send in an array of faces bulk associate all at once.  )
}

