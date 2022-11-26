'use strict';
const connection = require('../config/dbConfig')

const getUser = async (data) => {
    let sql = `SELECT * FROM db`;
    connection.query(sql, (error, result) => {
        if (error) {
            return console.error(error.message);
        }
        data(result);
    });
}
module.exports = {
    getUser
}

