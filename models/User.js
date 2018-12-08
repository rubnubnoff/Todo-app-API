const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
});

UserSchema.methods.getAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, config.get('jwtPrivateKey'), {expiresIn: '1h'});
    return token;
}

module.exports = mongoose.model('User', UserSchema);
