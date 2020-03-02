const express = require('express');

const PokemonController = require('../controllers/pokemon.controller');
const router = express.Router();

router.get('/getAllPokemon', PokemonController.getAllPokemon);



module.exports = router;