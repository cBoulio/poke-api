const Pool = require('pg').Pool

exports.pool = Pool({
    
    user: 'db_Admin',
    host: 'localhost',
    database: 'Vanilla_Pokedex',
    password: 'dangerMouse535',
    port: 5432,

});