const Joi = require('joi');
const { isWebAssemblyCompiledModule } = require('util/support/types');
const validations =  require("./globalJio");

const loginSchema = Joi.object({
    userName :  validations.userName.required(),
    password : validations.password.required()
})

module.exports = {
    loginSchema
}