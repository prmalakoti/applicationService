var express = require('express'),
router = express.Router();
const { posts, comments } = require('../controller/axiosController')


router.get('/getComments',  comments)
router.get('/getPosts', posts)
module.exports = router;