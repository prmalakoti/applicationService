const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const getToken = (req, res) => {
    const data = {
        userName: "Prashant",
        lastName: "Malakoti",
        empId: "116066"
    }
    let token = jwt.sign(data, process.env.TOKEN_SECRET, {expiresIn : '1m'});
    res.send(token);
}
const verifyToken = (req, res) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IlByYXNoYW50IiwibGFzdE5hbWUiOiJNYWxha290aSIsImVtcElkIjoiMTE2MDY2IiwiaWF0IjoxNjY4Njk5MzMyLCJleHAiOjE2Njg2OTkzOTJ9.79LMoRjesPRYIX_HTzaQStDNjViMHW3VTG8rTzDMlg8';
    let user = jwt.verify(token, process.env.TOKEN_SECRET)
    res.send(user);
}
module.exports = {
    verifyToken,
    getToken
}
