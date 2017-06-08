'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('order', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
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
  }
})

//  userSchema.beforeCreate(function (model) {
//     debug('Info: ' + 'Storing the password');    
//     model.generateHash(model.password, function (err, encrypted) {
//       debug('Info: ' + 'getting ' + encrypted);

//       model.password = encrypted;
//       debug('Info: ' + 'password now is: ' + model.password);
//       // done;
//     });
//   });
// };

module.exports.associations = (Order, {User, Face, OrderItem}) => {
  Order.belongsTo(User)
  Order.belongsToMany(Face, {through: OrderItem})
  Order.hasMany(OrderItem) //still necessary?
}




