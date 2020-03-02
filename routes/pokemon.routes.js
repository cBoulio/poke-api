const express = require('express');

const PokemonController = require('../controllers/pokemon.controller');

const todosController = require('../controllers/todo.controller');

const router = express.Router();

router.get('/getAllPokemon', PokemonController.getAllPokemon);

router.post('/todos', todosController.create);


module.exports = router;