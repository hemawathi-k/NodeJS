const express = require('express');
const router = express.Router();

// Test Route: Home
router.get('/', (req, res) => {
    console.log('GET /users hit');
    res.send('User Routes: Home');
});

// Test Route: Profile
router.get('/profile', (req, res) => {
    console.log('GET /users/profile hit');
    res.send('User Routes: Profile');
});

// Export the router
module.exports = router;
