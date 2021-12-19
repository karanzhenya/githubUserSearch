import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import {profileReducer} from "./profileReducer";

const rootReducer = combineReducers({
    profile: profileReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;