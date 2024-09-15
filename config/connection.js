// config/connection.js
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('tech_blog_db', null, null, {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  logging: false, // Disable logging; set to true for debugging

});
module.exports = sequelize;
