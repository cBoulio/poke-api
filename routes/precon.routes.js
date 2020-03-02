const express = require('express');

const PokemonController = require('../controllers/pokemon.controller');
const router = express.Router();

router.get('/pokemon', PokemonController.getAllPokemon);

module.exports = router;