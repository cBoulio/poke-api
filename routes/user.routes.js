const express = require('express');

const UserController = require('../controllers/user.controller');
const router = express.Router();

router.post('/registerUser', UserController.registerNewUser);

router.get('/getUser', UserController.getUser);

router.post('/loginUser', UserController.loginUser);

router.delete('/logoutUser', UserController.logoutUser);



module.exports = router;