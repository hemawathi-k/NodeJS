const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to display all users
router.get('/', userController.getUsers);

// Route to handle adding a new user
router.post('/add', userController.addUser);

module.exports = router;
