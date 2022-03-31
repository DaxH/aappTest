import { combineReducers } from "redux";
import { gameShop } from "./gameShopReducer";
import { search } from "./searchPokemon";

export const rootReducers = combineReducers({
    gameShop,
    search
})