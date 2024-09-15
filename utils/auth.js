// utils/auth.js
const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      // Respond with a 401 status code for API requests
      res.status(401).json({ message: 'You must be logged in to access this resource.' });
    } else {
      // Redirect for non-API requests
      res.redirect('/login');
    }
  } else {
    next();
  }
};

module.exports = withAuth;
