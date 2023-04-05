const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "hodlinfo",
    password: "Venom@1999",
    port: "5432",
});

module.exports = pool;