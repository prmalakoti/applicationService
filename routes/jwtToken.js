const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const getToken = async(tokenData) => {
    const data = {
        id: tokenData[0].id,
        userName: tokenData[0].userName,
        empId: tokenData[0].empId
    }
    return jwt.sign(data, process.env.TOKEN_SECRET, {expiresIn : '1h'});
}
const verifyToken = async(req, res) => {
    try{
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IlByYXNoYW50IiwibGFzdE5hbWUiOiJNYWxha290aSIsImVtcElkIjoiMTE2MDY2IiwiaWF0IjoxNjY5NTYyMDU5LCJleHAiOjE2Njk1NjU2NTl9.7p8jKkGnXe-nXjzTmYH_hL516bOEHGJ8LGSV2-kESM0';
        let user = jwt.verify(token, process.env.TOKEN_SECRET)
        res.send(user);
    } catch(err){
        res.send({ error : err.message}, 401);
    }
}
module.exports = {
    verifyToken,
    getToken
}
