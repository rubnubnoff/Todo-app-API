const express = require('express');
const router = express.Router();
const userSchema = require('../Schemas/userSchema');
const loginSchema = require('../Schemas/loginSchema');
const validationMiddleware = require('../middleware/validationMiddleware');
const { signup, login, logout } = require('../controllers/usersController');

router.post('/signup', validationMiddleware(userSchema), signup);
router.post('/login', validationMiddleware(loginSchema), login);
router.post('/logout', validationMiddleware(loginSchema), logout);
module.exports = router;