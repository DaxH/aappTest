import { fetchPokemonFailure, fetchPokemonRequest, fetchPokemonSuccess } from "../actions/searchAction";

const initialState = {
    loading: false,
    data: [],
    error: ''
}
export const search = (state = initialState, action) => {
    console.log('STATE SEARCH ', state, action.type);
    switch (action.type) {
        case fetchPokemonRequest:

            return {
                ...state,
                loading: true
            }
        case fetchPokemonSuccess:

            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case fetchPokemonFailure:

            return {
                loading: false,
                data: [],
                error: action.payload
            }

        default:
            return state
    }
}