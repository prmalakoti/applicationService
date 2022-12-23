'use strict';
const dotenv = require('dotenv');
dotenv.config();
const mysql = require('mysql');
const util = require('util');
const dbConn = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER_NAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    port     : process.env.DB_PORT
  });
  
const query = util.promisify(dbConn.query).bind(dbConn);

module.exports = query;