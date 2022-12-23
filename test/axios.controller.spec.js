const chai = require("chai");
const { JSON } = require("mysql/lib/protocol/constants/types");
const sinon =  require("sinon");
const sinonChai =  require("sinon-chai");
const expect = require("chai").expect
chai.should();
chai.use(sinonChai);
const axios = require("axios")
const axiosController = require("../controller/axiosController");
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

    it("Happy path post #1", async function() {
        sinon.stub(axios, 'get').returns({status: true});
        let result = await axiosController.posts(req,res);
        console.log(result);
    })
    it("Sad path post #1", async function() {
        sinon.stub(axios, 'get').rejects({status: true});
        let result = await axiosController.posts(req,res);
        console.log(result);
    })

    it("Happy path comments #1", async function() {
        sinon.stub(axios, 'get').returns({status: true});
        let result = await axiosController.comments(req,res);
        console.log(result);
    })
    it("Sad path comments #1", async function() {
        sinon.stub(axios, 'get').rejects({status: true});
        let result = await axiosController.comments(req,res);
        console.log(result);
    })
});