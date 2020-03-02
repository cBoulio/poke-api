
const PokemonService = require('../services/pokemon.service');
const {asyncHandler} = require('../utils/helper');

exports.getAllPokemon = asyncHandler(async (req,res) => {

    let getAllPokemonRes = await PokemonService.getAllPokemon();
    return HELPER.sendResponse(res, 200, getAllPokemonRes)
    
});