'use strict';
const db = require('../config/dbConfig')

const getLogin = async (userName, password) => {
    let sql = `SELECT * FROM users WHERE userName = '${userName}' AND password = '${password}'`;
    return await db(sql);
}
const getUser = async (userId) => {
    let sql = `SELECT * FROM users WHERE id = ${userId}`;
    return await db(sql);
}
const  addUser = async (data) => {
    let created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
    let sql = `INSERT INTO users (id, userName, email, empId, password, created_at, isActive) 
    VALUES('', '${data.userName}',  '${data.email}', '${data.empId}', '${data.password}', '', 'true')`;
    return await db(sql);
}

module.exports = {
    getLogin,
    getUser,
    addUser
}

