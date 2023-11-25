const express = require('express');
const { Post } = require('../models');
const router = express.Router();

// POST route to create a new post
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Additional routes for retrieving, updating, and deleting posts

module.exports = router;
