import cart from "./cart";
import {combineReducers} from "redux";
import sort from "./sort";


const rootReducer=combineReducers({cart,sort})


export default rootReducer;