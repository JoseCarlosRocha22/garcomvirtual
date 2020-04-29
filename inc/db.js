const mysql = require ('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    database: 'garcomvirtual',
    password: 'carlos@22'
  });

  module.exports = connection;
  