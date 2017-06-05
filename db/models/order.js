'use strict'

const Sequelize = require('sequelize');

module.exports = db => db.define('orders', {
  //name: Sequelize.STRING,
    status: {
        type: Sequelize.STRING,
        defaultValue: "Draft"
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
})