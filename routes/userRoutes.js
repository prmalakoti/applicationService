var express = require('express'),
router = express.Router();
const middleware = require("./../middleware/logger")
const userController = require('../controller/userController')

router.post('/login',  userController.logIn)
router.get('/getAllUser', userController.getAllUser)
router.get('/getUserById', userController.getUser)
router.put('/updateUser', userController.updateUser)
router.delete('/deleteUser', userController.deleteUser)
router.get('/getUser',  middleware.authorization, userController.getUser)
router.post('/createUser', userController.addUser)

module.exports = router;