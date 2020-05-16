const mysql = require('mysql');

const connectionPool = mysql.createPool({
    connectionLimit: 10,
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b71dbad0732621',
    password: '697744ae',
    database: 'heroku_2a29833c07033de',
})

module.exports = connectionPool;