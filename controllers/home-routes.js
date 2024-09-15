const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const router = require('express').Router();

// Get all posts for the homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      attributes: ['id', 'title', 'content', 'created_at'],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render('homepage', { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.error('Error fetching posts for homepage:', err);
    res.status(500).json({ message: 'An error occurred while loading the homepage.' });
  }
});

// Render the login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// Render the signup page
router.get('/signup', (req, res) => {
  res.render('signup');
});

// Get a single post for its details page
router.get('/post/:id', async (req, res) => {
  try {
    if (!req.params.id) {
      res.status(400).json({ message: 'Invalid post ID.' });
      return;
    }

    const dbPostData = await Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'content', 'title', 'created_at'],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this ID.' });
      return;
    }

    const post = dbPostData.get({ plain: true });
    res.render('single-post', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.error('Error fetching post:', err);
    res.status(500).json({ message: 'An error occurred while loading the post.' });
  }
});

// Redundant route (commenting out for clarity)
// router.get('/posts-comments', ...);

module.exports = router;
