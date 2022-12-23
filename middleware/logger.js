const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const logger = async(req,res,next) => {
    console.log(`API called------> ${req.originalUrl}`);
    next();
}

const authorization = async(req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')
        user = jwt.verify(token[1], process.env.TOKEN_SECRET)
        req.user = user;
        next();
    } catch(err){
        res.send(err.message, 401);
    }
}
module.exports = {
    logger,
    authorization
}