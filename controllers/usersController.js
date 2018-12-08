const User = require('../models/User');
const {validateUser, validateLogin} = require('../middleware/validationMiddleware');
const bcrypt = require('bcrypt');


module.exports = {
    signup: async function(req, res) {
        const {error} = validateUser(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        let user = await User.findOne({email: req.body.email});
        if(user) return res.status(400).send('User already registered...');

        const crypt = await bcrypt.hash(req.body.password, 10);

        user = await new User({
            name: req.body.name,
            email: req.body.email,
            password: crypt,
        });
        await user.save();

        res.send({message : 'User added successfully!!!'});
    },
    login: async function(req, res) {
        const {error} = validateLogin(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(400).send('Invalid email/password');

        const isValidate = await bcrypt.compare(req.body.password, user.password);
        if(!isValidate) return res.status(400).send('Invalid email/password');

        const token = user.getAuthToken();
        res.header('x-auth-token', token).send({ message:'Successfully login!!!'});
    }
};