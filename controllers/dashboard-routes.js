const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Get all posts for the dashboard
router.get('/', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
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
    res.render('dashboard', { posts, loggedIn: true });
  } catch (err) {
    console.error('Error fetching dashboard posts:', err);
    res.status(500).json({ message: 'An error occurred while loading the dashboard.' });
  }
});

// Get a post for editing
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    if (!req.params.id) {
      res.status(400).json({ message: 'Invalid post ID.' });
      return;
    }

    const dbPostData = await Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'title', 'content', 'created_at'],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
      ],
    });

    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this ID.' });
      return;
    }

    const post = dbPostData.get({ plain: true });
    res.render('edit-post', { post, loggedIn: true });
  } catch (err) {
    console.error('Error fetching post for editing:', err);
    res.status(500).json({ message: 'An error occurred while loading the post for editing.' });
  }
});

// Render new post page
router.get('/new', withAuth, (req, res) => {
  res.render('new-post', { loggedIn: true });
});

module.exports = router;
