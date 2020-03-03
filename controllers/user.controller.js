const { User } = require('../models');
const UserService = require('../services/user.service');
const {asyncHandler} = require('../utils/helper');

exports.registerNewUser = asyncHandler(async (req,res) => {

    let newUser = await UserService.registerNewUser(req.body);
    return HELPER.sendResponse(res, 200, newUser)
    
});


exports.getUser = asyncHandler(async (req,res) => {


    let user = await UserService.getUserById(req.body.user_id);
    return HELPER.sendResponse(res, 200, user)
    
});


exports.loginUser = asyncHandler(async (req,res) => {

   
    let username = req.body.username
    let password = req.body.password

    let user = await User.authenticate(username, password)


    return HELPER.sendResponse(res, 200, user)
    
});


exports.logoutUser = asyncHandler(async (req,res) => {

    
    const { user, authToken } = req

    if (user && authToken) {
        await req.user.logout(authToken);
        return res.status(204).send()
    }else{
        console.log('lol')
    }

 
    
    
    return HELPER.sendResponse(res, 200, user)
    
    
    
});