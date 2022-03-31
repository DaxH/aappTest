import Axios from "axios"

export const fetchPokemonRequest = 'FETCH_POKEMON_REQUEST'
export const fetchPokemonSuccess = 'FETCH_POKEMON_SUCCESS'
export const fetchPokemonFailure = 'FETCH_POKEMON_FAILURE'

export const fetchPokemonRequestAction = () => {
    return {
        type: fetchPokemonRequest
    }
}
export const fetchPokemonSuccessAction = (Pokemon) => {
    return {
        type: fetchPokemonSuccess,
        payload: Pokemon
    }
}
export const fetchPokemonFailureAction = (error) => {
    return {
        type: fetchPokemonFailure,
        payload: error
    }
}

export const fetchPokemon = (valor) => {
    return (dispatch) => {
        dispatch(fetchPokemonRequestAction());
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
            .then(response => {
                dispatch(fetchPokemonSuccessAction([response.data]))
            })
            .catch(error => {
                dispatch(fetchPokemonFailureAction('No se encontró el Pokemon'))
            })
    }

}