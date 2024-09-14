// server.js
const path = require('path');
const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const helpers = require('./utils/helpers'); // Updated path if necessary
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Session configuration
const sess = {
  secret: process.env.SESSION_SECRET || 'Super secret secret',
  cookie: {
    maxAge: 2 * 60 * 60 * 1000, // 2 hours
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(flash());

// Handlebars setup
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(routes);

// Global variables for flash messages and user info
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.loggedIn = req.session.loggedIn;
  res.locals.username = req.session.username;
  next();
});


// Start server after Sequelize connection
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
