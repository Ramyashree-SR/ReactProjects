import { combineReducers } from "redux";
import TodoReducer from './TodoReducer.';
import usersReducer from "./userReducer";

let rootReducer=combineReducers({
    todo: TodoReducer,
    users: usersReducer,
})
export default rootReducer;