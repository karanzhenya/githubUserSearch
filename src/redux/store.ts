import {applyMiddleware, combineReducers, createStore} from "redux";
import {usersReducer} from "./usersReducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    users: usersReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;