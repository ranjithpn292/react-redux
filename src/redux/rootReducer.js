import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./icecreams/iceCreamReducer";

export const rootReducer = {
    cake: cakeReducer,
    iceCream: iceCreamReducer
}