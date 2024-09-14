// seeds/index.js or seeds/seed.js
const seedUsers = require('./user');
const seedPosts = require('./post');
const seedComments = require('./comment');

const sequelize = require('../config/connection');

const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Database synced successfully.');

        await seedUsers();
        console.log('Users seeded successfully.');

        await seedPosts();
        console.log('Posts seeded successfully.');

        await seedComments();
        console.log('Comments seeded successfully.');

        process.exit(0);
    } catch (error) {
        console.error('Failed to seed database:', error);
        process.exit(1);
    }
};

seedAll();
