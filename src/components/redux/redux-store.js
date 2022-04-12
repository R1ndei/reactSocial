import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import profileReducer from "../Profile/profile-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from  "redux-thunk"
// Регистрация reducer для получения части от полного state
let reducers = combineReducers({messagesReducer, usersPage:usersReducer, profilePage: profileReducer,auth: authReducer});

//state
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store






