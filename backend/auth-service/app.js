// app.js
require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', userRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Auth Service is running on port ${port}`);
});