const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes'); // Import user routes

app.use(express.json()); // Middleware to parse JSON data
app.use('/users', userRoutes); // Use user routes

module.exports = app;
