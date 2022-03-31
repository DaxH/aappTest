export const buyPokemon = 'BUY_POKEMON'
export const returnPokemon = 'RETURN_POKEMON'

export const buyPokemonAction = (cant) => {
    return {
        type: buyPokemon,
        payload: cant
    }
 }
export const returnPokemonAction = (cant) => {
    return {
        type: returnPokemon,
        payload: cant
    }
 }