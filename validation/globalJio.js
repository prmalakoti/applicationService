const Joi = require("joi");
const { isWebAssemblyCompiledModule } = require("util/support/types");

const validations = {
    userName : Joi.string(),
    password : Joi.string()
}

module.exports = validations;