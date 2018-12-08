const express = require('express');
const router = express.Router();
const authenticationMiddleware = require('../middleware/autnetificationMiddleware');
const { getTasks, createTask, updateTask, deleteTask} = require('../controllers/tasksController');

router.get('/getTasks', authenticationMiddleware, getTasks);
router.post('/createTask', authenticationMiddleware, createTask);
router.put('/updateTask/:id', authenticationMiddleware, updateTask);
router.delete('/deleteTask/:id', authenticationMiddleware, deleteTask);

module.exports = router;