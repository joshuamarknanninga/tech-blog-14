// controllers/api/userRoutes.js
const router = require('express').Router();
const { User } = require('../../models');

// Register a new user
router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email, // Ensure email is included
      password: req.body.password
    });

    // Save user data in session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.status(200).json({ 
        user: userData, 
        message: 'You are now registered and logged in!' 
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to sign up. Please try again.' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect username or password, please try again.' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect username or password, please try again.' });
      return;
    }

    // Save user data in session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.json({ 
        user: userData, 
        message: 'You are now logged in!' 
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to log in. Please try again.' });
  }
});

// Logout route
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).json({ message: 'You have been logged out.' });
    });
  } else {
    res.status(404).json({ message: 'You are not logged in.' });
  }
});

module.exports = router;
