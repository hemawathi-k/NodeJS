exports.getUsers = (req, res) => {
    res.send('Fetching all users');
};

exports.createUser = (req, res) => {
    res.send('User created successfully');
};

exports.updateUser = (req, res) => {
    res.send(`User with ID ${req.params.id} updated`);
};

exports.deleteUser = (req, res) => {
    res.send(`User with ID ${req.params.id} deleted`);
};
