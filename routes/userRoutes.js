var express = require('express'),
router = express.Router();
const { getUser } = require('../controller/userController')
// const connection = require('../config/dbConfig')
// console.log(connection);
router.get('/',  getUser)
module.exports = router;

