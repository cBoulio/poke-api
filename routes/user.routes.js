const express = require('express');

const UserController = require('../controllers/user.controller');
const router = express.Router();

router.post('/registerUser', UserController.registerNewUser);


module.exports = router;