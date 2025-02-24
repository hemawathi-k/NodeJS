const express = require('express');
const app = express();
app.use(express.json());

app.get('/users', (req, res) => res.send('GET: Fetch users'));
app.post('/users', (req, res) => res.send('POST: Add user'));
app.put('/users/:id', (req, res) => res.send(`PUT: Update user ${req.params.id}`));
app.patch('/users/:id', (req, res) => res.send(`PATCH: Partially update user ${req.params.id}`));
app.delete('/users/:id', (req, res) => res.send(`DELETE: Remove user ${req.params.id}`));

app.listen(3000, () => console.log('Server running on port 3000'));
