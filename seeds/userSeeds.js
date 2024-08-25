const { User } = require('../models');

const userData = [
  {
    username: 'joshuananninga',
    password: 'test1'
    
  },
  {
    username: 'jmarknanninga',
    password: 'test2'
  },
  {
    username: 'jn',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;