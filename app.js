const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const cors = require('cors')

// APP VERSION -- 
const version = '/v1';



const port = process.env.PORT;
// we set the env here so when we change it our app uses a different db.
const env = process.env.NODE_ENV;

global.HELPER = require('./utils/helper');
global.MESSAGE_CODES = require('./utils/message_codes');
global.db = require('./config/db_connection');

//static-routes
const pokemonRoutes = require('./routes/pokemon.routes');
const trainerRoutes = require('./routes/trainer.routes');
const editionRoutes = require('./routes/edition.routes');
const preconRoutes  = require('./routes/precon.routes');



const userRoutes    = require('./routes/user.routes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'images')));
app.use(cors())

app.use(version + '/pokemon', pokemonRoutes);
app.use(version + '/trainer', trainerRoutes);
app.use(version + '/edition', editionRoutes);
app.use(version + '/precon', preconRoutes);
app.use(version + '/user', userRoutes);
//app.use(version + '/admin', adminRoutes);

// Check if apis are running
app.get('/health', (req,res)=>{
  res.send({message:ERROR_CODES.HEALTH_CHECK});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err)
});

app.listen(app.get('port'), function() {
  console.log("Vanilla Pokedex server listening on port %d in %s mode",port, env);
});

module.exports = app;


