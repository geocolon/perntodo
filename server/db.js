// require("dotenv").config();

// const pool = new Pool({
//   host: "aws-0-us-east-1.pooler.supabase.com",
//   port: 6543,
//   user: "postgres",
//   password: process.env.DB_PASSWORD,
//   database: "postgres",
// });
const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;