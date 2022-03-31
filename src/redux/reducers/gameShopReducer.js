import { buyPokemon, returnPokemon } from "../actions/gameShopAction";

const defaultGameShop = {
    pokemon: 20
}

export const gameShop = (state = defaultGameShop, action) => {
    console.log('STATE GAME ', state, action.type);
    switch (action.type) {
        case buyPokemon:
            return {
                ...state,
                pokemon: state.pokemon + action.payload
            }
        case returnPokemon:

            return {
                ...state,
                pokemon: state.pokemon - action.payload
            }
        default:
            return state
    }
}