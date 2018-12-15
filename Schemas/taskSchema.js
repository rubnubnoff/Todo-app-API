const Joi = require('joi');

const taskSchema = {
    text: Joi.string().required(),
    status: Joi.string().valid('active', 'done').insensitive(),
    createDate: Joi.date()
};

module.exports = taskSchema;