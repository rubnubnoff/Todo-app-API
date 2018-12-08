const Task = require('../models/Task');
const {validateTask} = require('../middleware/validationMiddleware');
const _ = require('lodash');

module.exports = {
    createTask: async (req, res) => {
        const {error} = validateTask(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        const task = await Task({
            text: req.body.text,
            status: req.body.status,
            author: req.user._id
        });
        await task.save();
        res.send(_.pick(task, ['text', 'status', 'createDate']));
    },
    updateTask: async (req, res) => {
        const {error} = validateTask(req.body);
        if(error) return res.status(400).send(error.details[0].message);
            
        const task = await Task.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        if(!task) return res.status(404).send('You don\'t have that task yet...'); 

        res.send(_.pick(task, ['text', 'status', 'createDate']));
    },
    deleteTask: async (req, res) => {      
        const task = await Task.findByIdAndRemove(req.params.id );
        if(!task) return res.status(404).send('You don\'t have that task yet...'); 

        res.send(_.pick(task, ['text', 'status', 'createDate']));
    },
    getTasks: async (req, res) => {
        const tasks = await Task.find({author: req.user._id})
            .sort('createDate')
            .populate({path: 'author', select: 'name email'});
            
        res.send(tasks);     
    }
};
