const { Pool } = require('pg');


const connectionString = 'postgres://dom:2252@localhost:5432/my_bill';

// Create a PostgreSQL connection pool
export default const pool = new Pool({
    connectionString: connectionString,
});