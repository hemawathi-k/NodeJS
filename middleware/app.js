/*Middleware in Node.js (especially in Express.js) refers to functions that have access to the request (req), response (res), and the next middleware function (next) in the request-response cycle. */

const express = require('express');
const app = express();
const PORT = 9000;
//req => middleware => res
const USERNAME = 'admin';
const PASSWORD = 'password123';

const logger=(req,res,next)=>{
    const method=req.method;
    const url=req.url;
    const time=new Date().getFullYear();
    console.log(method,url,time);
    //res.send("Testing...")
    next();
}

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

app.get('/',logger, (req, res) => {
    res.send('Welcome to the public route!');
});
app.get('/about',logger, (req, res) => {
    res.send('About Page!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
