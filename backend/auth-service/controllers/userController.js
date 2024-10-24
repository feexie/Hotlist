const bcrypt = require('bcrypt');
const { registerUser, findUserByEmail } = require('../models/userModel');
const jwt = require('jsonwebtoken'); // Add JWT for token generation

const registerUserController = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Input validation (you can improve this as needed)
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const user = await findUserByEmail(email);
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await registerUser(firstName, lastName, email, passwordHash);

    // Optionally exclude sensitive information from the response
    const { password: _, ...userWithoutPassword } = newUser.toObject(); // Assuming newUser is a Mongoose document
    res.status(201).json({ user: userWithoutPassword });
  } catch (error) {
    console.error(error); // Log the actual error
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

const loginUserController = async (req, res) => {
  const { email, password } = req.body;

  // Input validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error); // Log the actual error
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

module.exports = { registerUserController, loginUserController };
