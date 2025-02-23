const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express);

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Express App!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});



// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
