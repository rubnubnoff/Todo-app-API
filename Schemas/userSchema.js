const Joi = require('joi');

const userSchema = {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
};

module.exports = userSchema;