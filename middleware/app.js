const express = require('express');
const app = express();
const PORT = 9000;

const USERNAME = 'admin';
const PASSWORD = 'password123';

function authMiddleware(req, res, next) {
    const username = req.headers['username'];
    const password = req.headers['password'];

    if (username === USERNAME && password === PASSWORD) {
        next(); 
    } else {
        res.status(403).json({ message: 'Invalid credentials' });
    }
}

app.get('/protected', authMiddleware, (req, res) => {
    res.send('Welcome to the protected route!');
});

app.get('/', (req, res) => {
    res.send('Welcome to the public route!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
