import {applyMiddleware, combineReducers, createStore} from "redux";
import {usersReducer} from "./usersReducer";
import thunk from 'redux-thunk'
import {profileReducer} from "./profileReducer";

const rootReducer = combineReducers({
    users: usersReducer,
    profile: profileReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;