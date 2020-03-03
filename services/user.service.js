const { User } = require('../models');
const Todo = require('../models').Todo;
const Sequelize = require('sequelize')
var bcrypt = require('bcryptjs');


exports.loginUser = async (req) => {
    return new Promise(async (resolve,reject) =>{

        let user = User.authenticate(username, password)

        user = await user.authorize();
        
        resolve(user);
   
    });
};

exports.registerNewUser = async (user) => {
    return new Promise(async (resolve,reject) =>{


     
            let hashedPassword = bcrypt.hashSync(user.password, 10);

            let newUser = {
                username: user.username,
                email:user.email,
                password: hashedPassword,
                total_Cards:0,
            }
                
            User.create(newUser).then(function (user) {
                
                let data = user.authorize();
                resolve(data)

            });
            

           
     
    });
    
};



exports.getUserById = async (user) => {
    return new Promise(async (resolve,reject) =>{
        User.findOne({where: {user_id:user.userId}}).then(function (user) {
            resolve(user)
        });
    });
};

