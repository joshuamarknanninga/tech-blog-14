const Sequelize = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: '127.0.0.1',  // or 'localhost'
  dialect: 'mysql',
  port: 3306,  // default MySQL port
});

module.exports = sequelize;
