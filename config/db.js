const Sequelize = require('sequelize')
// if you are using postgres, your DB URL will look like this
const DATABASE_URL = 'postgres://db_Admin:dangerMouse535@localhost/vanilla_pokedex'
const db = new Sequelize(DATABASE_URL)

module.exports = db