const Joi = require('joi');


function validateUser(user) {
    const userSchema = {
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    };

    const result = Joi.validate(user, userSchema);
    return result;
}
function validateLogin(user) {
    const userSchema = {
        email: Joi.string().email().required(),
        password: Joi.string().required()
    };

    const result = Joi.validate(user, userSchema);
    return result;
}

function validateTask(task) {
    const taskSchema = {
        text: Joi.string().required(),
        status: Joi.string().valid('active', 'done').insensitive(),
        createDate: Joi.date()
    };

    const result = Joi.validate(task, taskSchema);
    return result;
}

module.exports = {
    validateUser: validateUser,
    validateLogin: validateLogin,
    validateTask: validateTask
}
