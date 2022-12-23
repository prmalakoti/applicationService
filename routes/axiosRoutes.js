var express = require('express'),
router = express.Router();
var middleware = require('../middleware/logger')
const { posts, comments } = require('../controller/axiosController')


router.get('/getComments', middleware.authorization, comments)
router.get('/getPosts', middleware.authorization, posts)
module.exports = router;