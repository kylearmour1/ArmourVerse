const express = require('express');
const { Comment } = require('../models');
const router = express.Router();

// POST route to create a new comment
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Additional routes for other comment operations

module.exports = router;
