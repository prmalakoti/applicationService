'use strict';
const userModel = require("../model/userModel");
const tokenGenerate = require("./../routes/jwtToken")
const { loginSchema } = require("../validation/userSchema")

const logIn = async (req, res) => {
    try {
        let { error : loginSchemaErr } = loginSchema.validate(req.body);
        if(loginSchemaErr){
            return res.status(400).json({message : loginSchemaErr.message });
        }
        let loginData = await userModel.getLogin(req.body.userName, req.body.password)
        if(loginData.length > 0){
            const jwtTokenData = await tokenGenerate.getToken(loginData)
            res.send({ result: loginData, token: jwtTokenData });
        } else {
            res.send(403)
        }
    } catch (err) {
        res.send(err, 500)
    }
}
const getUser = async (req, res) => {
    let userId = req?.user?.id ?? req.query.empId;
    let responceData = await userModel.getUser(userId)
    res.send({ result: responceData });
}
const getAllUser = async (req, res) => {
    let responceData = await userModel.getAllUser();
    res.send({ result: responceData });
}

const deleteUser = async (req, res) => {
    let userId = req?.user?.id ?? req.query.empId;
    let responceData = await userModel.deleteUser(userId)
    res.send({ result: responceData });
}

const addUser = async (req, res) => {
    try{
        let responceData = await userModel.addUser(req.body)
        res.send({ result: responceData });

    } catch(err){
        res.send({error : err.message}, 500)
    }
}
const updateUser = async (req, res) => {
    try{
        let responceData = await userModel.updateUser(req.body)
        res.send({ result: responceData });

    } catch(err){
        res.send({error : err.message}, 500)
    }
}
module.exports = {
    logIn,
    getUser,
    getAllUser,
    deleteUser,
    addUser,
    updateUser
}