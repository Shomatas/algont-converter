import {createStore, combineReducers} from "redux";
import {calculateCurrency} from "./calculateCurrency/calculateCurrency.js";



export const store = createStore(calculateCurrency);
