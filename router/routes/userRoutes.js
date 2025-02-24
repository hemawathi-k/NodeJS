const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Import controller

router.get('/', userController.getUsers);      // GET all users
router.post('/', userController.createUser);   // POST a new user
router.put('/:id', userController.updateUser); // Update user
router.delete('/:id', userController.deleteUser); // Delete user

module.exports = router;
