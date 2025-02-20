const express = require('express');
const mysql = require('mysql2/promise'); // Use mysql2 with promises

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Database connection settings
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '2312',
    database: 'db',
    port: 3306
};

// Function to connect to the database
async function getConnection() {
    return await mysql.createConnection(dbConfig);
}

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Students API! Use /students to access student data.');
});

// Create a new student
app.post('/students', async (req, res) => {
    const { firstname, category, branch } = req.body;
    const connection = await getConnection();
    const [result] = await connection.execute('INSERT INTO students (firstname, category, branch) VALUES (?, ?, ?)', [firstname, category, branch]);
    res.status(201).json({ id: result.insertId, firstname, category, branch });
    await connection.end();
});

// Read all students
app.get('/students', async (req, res) => {
    const connection = await getConnection();
    const [rows] = await connection.query('SELECT * FROM students');
    res.json(rows);
    await connection.end();
});

// Update a student
app.put('/students/:id', async (req, res) => {
    const { id } = req.params;
    const { firstname, category, branch } = req.body;
    const connection = await getConnection();
    const [result] = await connection.execute('UPDATE students SET firstname = ?, category = ?, branch = ? WHERE id = ?', [firstname, category, branch, id]);
    if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Student not found' });
    }
    res.json({ id, firstname, category, branch });
    await connection.end();
});

// Delete a student
app.delete('/students/:id', async (req, res) => {
    const { id } = req.params;
    const connection = await getConnection();
    const [result] = await connection.execute('DELETE FROM students WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Student not found' });
    }
    res.status(204).send(); // No content
    await connection.end();
});

// Start the server
app.listen(8080, () => {
    console.log("Listening on port 8080...");
});




///testing purpose crud operations 
// create 
// http POST http://localhost:8080/students firstname="John" category="A" branch="CS"

// read
// http GET http://localhost:8080/students

// update 
// http PUT http://localhost:8080/students/1 firstname="Jane" category="B" branch="IT"

// delete 
// http DELETE http://localhost:8080/students/1
