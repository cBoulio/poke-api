
const UserService = require('../services/user.service');
const {asyncHandler} = require('../utils/helper');

exports.registerNewUser = asyncHandler(async (req,res) => {

    let newUser = await UserService.registerNewUser(req.body);
    return HELPER.sendResponse(res, 200, newUser)
    
});