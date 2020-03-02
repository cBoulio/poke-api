// config.js
const env = process.env.NODE_ENV; // 'dev' or 'test'

const devEnv = require('../config/development.json');
const qaEnv = require('../config/qa.json');
const prodEnv = require('../config/production.json');

const dev = {

    app: { port: parseInt(process.env.TEST_APP_PORT) || 3000 },
    devEnv 
    
};
const qa = {

    app: { port: parseInt(process.env.TEST_APP_PORT) || 3000 },
    qaEnv

};

const production = {

    app: { port: parseInt(process.env.TEST_APP_PORT) || 3000 },
    prodEnv

};

const config = { dev, qa, production };

module.exports = config[env];