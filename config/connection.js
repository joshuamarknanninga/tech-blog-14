// config/connection.js
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('tech_blog_db', 'joshuamarknanninga', '2004hondaodysey!', {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT,
  logging: false, // Disable logging; set to true for debugging

});
module.exports = sequelize;
