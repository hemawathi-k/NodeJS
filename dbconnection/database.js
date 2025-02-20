// const express = require('express');
// const mysql = require('mysql2');  // Use mysql2 instead of mysql

// const app = express();

// // Database connection
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '2312',
//     database: 'db',
//     port: 3306
// });

// connection.connect((err) => {
//     if (err) {
//         console.log("Database connection error:", err.message);
//         return;
//     }
//     console.log("Connected successfully!");

//     // Query the database
//     connection.query('SELECT * FROM students', (err, result) => {
//         if (err) {
//             console.log("Query error:", err.message);
//             return;
//         }
//         console.log("Query result:", result);

//         // End the connection after the query (if testing)
//         connection.end();
//     });
// });

// app.listen(8080, () => {
//     console.log("Listening on port 8080...");
// });




const express = require('express');
const mysql = require('mysql2/promise');  // Use promise-based mysql2

const app = express();

async function connectAndQuery() {
    try {
        // Database connection
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '2312',
            database: 'db',
            port: 3306
        });
        console.log("Connected successfully!");

        // Query the database
        const [rows] = await connection.execute('SELECT * FROM students');
        console.log("Query result:", rows);

        // End the connection after the query
        await connection.end();
    } catch (err) {
        console.log("Database connection error:", err.message);
    }
}

connectAndQuery();

app.listen(8080, () => {
    console.log("Listening on port 8080...");
});
