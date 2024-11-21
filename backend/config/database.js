const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'user', 'password', {
  host: 'localhost',
  dialect: 'mariadb',
});

module.exports = sequelize;
