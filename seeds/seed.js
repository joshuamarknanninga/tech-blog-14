// seeds/seed.js
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synced!');

    await User.bulkCreate([
      {
        username: 'leonis',
        email: 'leonhsu95@gmail.com',
        password: 'admin12345',
      },
      {
        username: 'saladtini',
        email: 'lernantino@hotmail.com',
        password: 'password12345',
      },
      {
        username: 'zaconium',
        email: 'zli0@gmail.com',
        password: 'zacPW1234',
      },
      {
        username: 'amiChopsticks',
        email: 'amiko@yahoo.com',
        password: 'password12345',
      },
      {
        username: 'DallioHax',
        email: 'dalliohax0@gmail.com',
        password: 'dHaxer9519',
      },
    ], {
      individualHooks: true,
      returning: true,
    });
    console.log('Users seeded!');

    // Seed Posts
    const posts = await Post.bulkCreate([
      {
        title: "Ethereum Extends Gains to Rise 8%; Bitcoin Firms",
        content: "Cryptocurrency Ethereum extended gains to rise more than 8% on Monday to $2,587 but remained 40% below a record high of above $4,300 hit earlier this month. At 1153 GMT, it was trading up 7.4% at $2,565.69. Larger rival Bitcoin also gained in its wake with the world's biggest and best-known cryptocurrency rising 3.7% to $36,977 in quiet trading with London and U.S. markets shut for holidays.",
        user_id: 1,
      },
      {
        title: "npm 7 is the latest and the greatest!",
        content: "npm 7 was just published as latest to the npm registry last week, and it’s now the default version you get when you run npm install --global npm. Workspaces – By far the most-requested feature by npm users everywhere, this new set of npm CLI features lets you manage multiple packages from within a singular, top-level root package.",
        user_id: 2,
      },
      {
        title: "Chrome will soon warn you when you might not want to trust an extension",
        content: "A Google is rolling out new safety features for Chrome which are designed to make it easier to spot dubious downloads and extensions. They build upon the browser’s Enhanced Safe Browsing feature, which launched last year to offer better warnings against phishing sites. In order to be trusted, extensions need to come from a developer that has followed Google’s Developer Program Policies.",
        user_id: 2,
      },
      {
        title: "Have autonomous robots started killing in war?",
        content: "Elke Schwarz, a senior lecturer in political theory at Queen Mary University London who’s affiliated with the International Committee for Robot Arms Control, tells The Verge that discussions like this show we need to move beyond “slippery and political” debates about definitions and focus on the specific functionality of these systems. What do they do and how do they do it?",
        user_id: 5,
      },
      {
        title: "Google is making it harder for Android apps to track you once you’ve opted out",
        content: "It’s going to get harder for Android apps to track users who’ve opted out of receiving personalized ads, the Financial Times reports, after Google announced changes to how it’ll handle the unique device identifiers that allow marketers to track them between apps. Starting later this year, Google is cutting off access to these “Advertising IDs” after a user opts out, and will show developers a “string of zeros” in its place.",
        user_id: 4,
      },
    ]);
    console.log('Posts seeded!');

    await Comment.bulkCreate([
      {
        comment_text: "No way!",
        user_id: 2,
        post_id: 3,
      },
      {
        comment_text: "First Comment :)",
        user_id: 2,
        post_id: 5,
      },
      {
        comment_text: "Is this believable?",
        user_id: 4,
        post_id: 1,
      },
      {
        comment_text: "Nice.",
        user_id: 3,
        post_id: 5,
      },
      {
        comment_text: "Groundbreaking stuff, going to follow this post closely.",
        user_id: 3,
        post_id: 4,
      },
      {
        comment_text: "As if!",
        user_id: 2,
        post_id: 1,
      },
      {
        comment_text: "Right, you're entitled to your own opinion.",
        user_id: 5,
        post_id: 3,
      },
      {
        comment_text: "Awesome, I'd like to know more.",
        user_id: 2,
        post_id: 1,
      },
    ]);
    console.log('Comments seeded!');

    process.exit(0);
  } catch (error) {
    console.error('Failed to seed database:', error);
    process.exit(1);
  }
};

seedAll();
