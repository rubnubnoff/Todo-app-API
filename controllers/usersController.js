const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    signup: async (req, res) => {
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
    login: async (req, res) => {
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(400).send('Invalid email/password');

        const isValidate = await bcrypt.compare(req.body.password, user.password);
        if(!isValidate) return res.status(400).send('Invalid email/password');

        const token = user.getAuthToken();
        res.header('x-auth-token', token).send({ message:'Successfully login!!!'});
    },
    logout: async (req, res) => {
        res.header('x-auth-token', undefined).send({ message:'Successfully logOut!!!'});
    }
};