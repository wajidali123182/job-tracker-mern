const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  console.log('--- NEW REGISTRATION RECEIVED ---');
  console.log('User Data:', req.body);
  console.log('---------------------------------');
  
  // Send a success response back to the frontend
  res.status(201).json({ message: 'Registration data received successfully!' });
});

router.post('/login', (req, res) => {
  console.log('--- NEW LOGIN ATTEMPT ---');
  console.log('User Data:', req.body);
  console.log('-------------------------');
  
  // Send a success response back to the frontend
  res.status(200).json({ message: 'Login data received successfully!' });
});

module.exports = router;
