const seedUsers = require('./user');
const seedPosts = require('./post');
const seedComments = require('./comment');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('Database synced!');
    await seedUsers();
    console.log('Users seeded!');
    await seedPosts();
    console.log('Posts seeded!');
    await seedComments();
    console.log('Comments seeded!');
    process.exit(0);
};

seedAll();