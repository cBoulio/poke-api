const User = require('../models').User;
const Todo = require('../models').Todo;
const Sequelize = require('sequelize')

exports.registerNewUser = async (user) => {
    return new Promise(async (resolve,reject) =>{
        
        
        User
      .create({
        user_id: user.userId, username: user.username, password: user.password, total_Cards:0,
      })
       

        resolve('done')
          
    });
    
};







