const {pool} = require('../config/db_connection');

const pokemon = require('../json/pokemon');

exports.getAllPokemon = async () => {
    return new Promise(async (resolve,reject) =>{
        pool.query('SELECT * FROM pokemon ORDER BY number ASC', (error, results) => {
            if (error) {
              throw error
            }
            resolve(JSON.stringify(results.rows));
        })
    });
    
};



exports.createPokemon = async () => {
    return new Promise(async (resolve,reject) =>{
        
        console.log(pokemon.pokemon.length)
        for(var x=0; x<pokemon.pokemon.length; x++){
            console.log('Pokemon', pokemon.pokemon[x])

            await pool.query('INSERT INTO pokemon (name, number, dark_version, halogram) VALUES ($1, $2, $3, $4)'
            , [ pokemon.pokemon[x].name,
                pokemon.pokemon[x].number,
                pokemon.pokemon[x].dark_version,
                pokemon.pokemon[x].dark_version],

            (error, results) => {
                if (error) {
                  throw error
                }
                
            })

            
        }
        resolve(`dONE`)
    
});
};





