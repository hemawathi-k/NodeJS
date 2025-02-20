const express = require('express');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true }));

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/', userRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
