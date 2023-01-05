import { combineReducers } from "redux";
import Reducerlist from "./Reducer";

const rootreducer = combineReducers({
    productList : Reducerlist
})

export default rootreducer;