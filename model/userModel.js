'use strict';
const db = require('../config/dbConfig')

const getLogin = async (userName, password) => {
    let sql = `SELECT * FROM users WHERE userName = '${name}' AND password = '${password}'`;
    return await db(sql);
}
const getUser = async (userId) => {
    let sql = `SELECT * FROM users WHERE id = ${userId}`;
    return await db(sql);
}
const getAllUser = async (userId) => {
    let sql = `SELECT * FROM users WHERE isActive = 0`;
    return await db(sql);
}
const deleteUser = async (userId) => {
    let sql = `DELETE FROM users WHERE id = ${userId}`;
    return await db(sql);
}
const  addUser = async (data) => {
    let created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
    let sql = `INSERT INTO users (id, name, email, phone, empId, password, created_at, isActive) 
    VALUES('', '${data.name}',  '${data.email}', '${data.phone}', '${data.empId}', '${data.password}', '', 'true')`;
    return await db(sql);
}

const  updateUser = async (data) => {
    let sql = `UPDATE users SET name = "${data.name}", email = "${data.email}", phone = "${data.phone}", empId = "${data.empId}", password = "${data.password}" WHERE id = ${data.id}` 
    //let sql = `INSERT INTO users (id, name, email, phone, empId, password, created_at, isActive) 
    //VALUES('', '${data.name}',  '${data.email}', '${data.phone}', '${data.empId}', '${data.password}', '', 'true')`;
    return await db(sql);
}

module.exports = {
    getLogin,
    getUser,
    getAllUser,
    deleteUser,
    addUser,
    updateUser
}

