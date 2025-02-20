// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // About page
// app.get('/about', (req, res) => {
//     res.send('This is the About page.');
//   });
  
//   // Contact page
//   app.get('/contact', (req, res) => {
//     res.send('This is the Contact page.');
//   });
  
//   // Dynamic user route
// app.get('/user/:id', (req, res) => {
//     const userId = req.params.id; // Get the 'id' parameter
//     res.send(`User ID: ${userId}`);
//   });
  

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });




const express = require('express');
const app = express();
const port = 3000;

// Import user routes
const userRoutes = require('./routes/userRoutes');

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

// Use user routes
app.use('/users', userRoutes);

// 404 Route (handles undefined routes)
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
