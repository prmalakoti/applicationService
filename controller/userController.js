'use strict';
const { response } = require("express");
const userModel = require("../model/userModel");

const getUser = async (req, res) => {
    // let responceData = await userModel.getUser()
    // res.send(responceData);
    userModel.getUser(function (err, datas) {
        if (err)
            res.send(err);
        console.log(datas);
        res.send(datas);
    });
    
}
module.exports = {
    getUser
}