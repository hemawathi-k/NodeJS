const userModel = require('../models/user');

// Get all users
exports.getUsers = (req, res) => {
  const users = userModel.getAllUsers();
  res.render('index', { users });
};

// Add a new user
exports.addUser = (req, res) => {
  const { name, email } = req.body;
  userModel.addUser(name, email);
  res.redirect('/');
};
