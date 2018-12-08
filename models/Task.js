const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'active',
        enum: ['active', 'done'],
        lowercase: true
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }
});

module.exports = mongoose.model('Task', TaskSchema);
