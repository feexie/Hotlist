const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// Define routes for registration and login
router.post('/register', async (req, res) => {
    try {
        const user = await registerUser(req.body); // Ensure you're passing the body correctly
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Registration failed', error: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const token = await loginUser(req.body); // Ensure you're passing the body correctly
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Login failed', error: error.message });
    }
});

module.exports = router;
