const express = require('express');
const router = express.Router();
const taskSchema = require('../Schemas/taskSchema');
const authenticationMiddleware = require('../middleware/autnetificationMiddleware');
const validationMiddleware = require('../middleware/validationMiddleware');
const { getTasks, createTask, updateTask, deleteTask} = require('../controllers/tasksController');

router.get('/tasks', authenticationMiddleware, getTasks);
router.post('/task', authenticationMiddleware, validationMiddleware(taskSchema), createTask);
router.put('/task/:id', authenticationMiddleware, validationMiddleware(taskSchema), updateTask);
router.delete('/task/:id', authenticationMiddleware, deleteTask);

module.exports = router;