const chai = require("chai");
const { JSON } = require("mysql/lib/protocol/constants/types");
const sinon =  require("sinon");
const sinonChai =  require("sinon-chai");
const { isTypedArray } = require("util/support/types");
const expect = require("chai").expect
chai.should();
chai.use(sinonChai);
const userController = require("../controller/userController");
const userModel =  require("../model/userModel");
const token = require("../routes/jwtToken")

describe("Test caese for userController --->", () =>{

    let req, res;
    beforeEach(function () {
        req = {
            body : {
                userName : "prashant",
                password : '123456'
            }
        }
        res = {
            send: function(k) {
                return {
                    k,
                    josn: function(po) {
                        return JSON.parse(po)
                    }
                }
            },
            josn : function(d){
                return JSON.parse(JSON.stringify(d))
            },
            next: function(a) {
                return a
            },
            status: function(t) {
                return {
                    t,
                    josn: function(po){
                        return po
                    }
                }
            }
        }
    })
    afterEach(function () {
        sinon.restore();
    })

    it("Happy path userName and password #1", async function() {
        sinon.stub(userModel, "getLogin").resolves([{id : "1", userName : "test", empId : "5656" }]);
        sinon.stub(token, "getToken").resolves({token: "testToken123456"})
        let result = await userController.logIn(req,res);
        console.log(result);
    })
    it("Sad path if model returns wrong data #1", async function() {
        sinon.stub(userModel, "getLogin").resolves({id : "1", userName : "test", empId : "5656" });
        sinon.stub(token, "getToken").resolves({token: "testToken123456"})
        let result = await userController.logIn(req,res);
        console.log(result);
    })
    it("Sad path wrong input #1", async function() {
        req = {
        }
        sinon.stub(userModel, "getLogin").resolves({id : "1", userName : "test", empId : "5656" });
        sinon.stub(token, "getToken").resolves({token: "testToken123456"})
        let result = await userController.logIn(req,res);
        console.log(result);
    })
});