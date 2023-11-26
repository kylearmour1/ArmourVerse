const router = require('express').Router();
const { User } = require('../models');
const { generateToken } = require('../middleware/auth');
const bcrypt = require('bcryptjs');

// Signup route
router.post('/signup', async (req, res) => {
    try {
      const user = await User.create(req.body);
      const token = generateToken(user);
      res.status(201).json({ user, token });
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // Login route
  router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user || !await user.isCorrectPassword(password)) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const token = generateToken(user);
      res.json({ user, token });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
