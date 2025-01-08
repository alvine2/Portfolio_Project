// filepath: /backend/routes/api.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Example route
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;