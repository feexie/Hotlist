const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// Define routes for registration and login
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
