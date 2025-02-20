let users = []; // Simulated in-memory "database"

// Function to get all users
const getAllUsers = () => {
  return users;
};

// Function to add a user
const addUser = (name, email) => {
  users.push({ name, email });
};

module.exports = { getAllUsers, addUser };
