const express = require('express');
const router = express.Router();
const userSchema = require('../Schemas/userSchema');
const loginSchema = require('../Schemas/loginSchema');
const validationMiddleware = require('../middleware/validationMiddleware');
const { signup, login } = require('../controllers/usersController');

router.post('/signup', validationMiddleware(userSchema), signup);
router.post('/login', validationMiddleware(loginSchema), login);

module.exports = router;