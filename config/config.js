require('dotenv').config()

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
    username: "db_Admin",
    password: "dangerMouse535",
    database: "Vanilla_Pokedex",
    host: "127.0.0.1",
  },
  test: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
    username: "db_Admin",
    password: "dangerMouse535",
    database: "Vanilla_Pokedex",
    host: "127.0.0.1",
  },
  production: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
    username: "db_Admin",
    password: "dangerMouse535",
    database: "Vanilla_Pokedex",
    host: "127.0.0.1",
  },
}