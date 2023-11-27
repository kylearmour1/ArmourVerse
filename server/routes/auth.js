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
  
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }
  
      const validPassword = await user.isCorrectPassword(password);
      if (!validPassword) {
        return res.status(401).json({ message: 'Incorrect password' });
      }
  
      const token = generateToken(user);
      res.json({ user, token });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;
