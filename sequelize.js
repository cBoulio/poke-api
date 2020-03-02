const config = require('./config/config');

const Sequelize = require('sequelize')
  , sequelize = new Sequelize(config.db, config.env.username,config.env.password, {
      dialect: config.env.dialect, // or 'sqlite', 'postgres', 'mariadb'
      port:    3306, // or 5432 (for postgres)
      operatorsAliases: false
    });

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });
