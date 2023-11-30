// connect to postgres database
const { Pool } = require('pg');
// require('dotenv').config();

const connectionString = 'postgres://dom:2252@localhost:5432/my_bill';

// Create a PostgreSQL connection pool
const pool = new Pool({
    connectionString: connectionString,
});

// const pool = new Pool({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_DATABASE,
// })

// get all bills
// const getBills = (request, response) => {
//     pool.query('SELECT * FROM bills ORDER BY id ASC', (error, results) => {
//         if (error) {
//             throw error
//         }
//         response.status(200).json(results.rows)
//     })
// }
// test the connection
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error connecting to PostgreSQL:', err);
    } else {
        console.log('Connected to PostgreSQL:', res.rows[0].now);
    }

    // Close the connection pool
    pool.end();
});