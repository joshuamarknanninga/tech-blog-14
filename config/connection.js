// config/connection.js
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  'tech_blog',
  '',
  '',
  {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
  }
);

module.exports = sequelize;
