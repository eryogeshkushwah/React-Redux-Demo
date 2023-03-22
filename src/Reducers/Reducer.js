import { combineReducers } from "redux";
import { addToList } from "./Task";

const rootReducer=combineReducers({
    ToAdd:addToList
})
export default rootReducer;