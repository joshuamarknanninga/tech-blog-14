// config/connection.js
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('postgres://localhost:5432/tech_blog', {
  dialect: 'postgres',
  logging: false, // Disable logging; set to true for debugging
//   'tech_blog',
//   '',
//   '',
//   {
//     host: 'localhost',
//     dialect: 'postgres',
//     port: 5432,
//   }
// );
});
module.exports = sequelize;
