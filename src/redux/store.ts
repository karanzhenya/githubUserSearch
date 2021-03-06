import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import {profileReducer} from "./profileReducer";
import {appReducer} from "./appReducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;