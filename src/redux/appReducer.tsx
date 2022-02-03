type StatusType = 'idle' | 'loading' | 'success' | 'failed';

export type InitialAppStateType = {
    status: StatusType,
    error: string
}

const initialState: InitialAppStateType = {
    status: 'idle',
    error: ''
}

type ChangeLoadingStatusActionType = {
    type: 'CHANGE-LOADING-STATUS',
    status: StatusType
}
type SetErrorActionType = {
    type: 'SET-ERROR',
    error: string
}

type ActionsType = ChangeLoadingStatusActionType | SetErrorActionType;

export const appReducer = (state: InitialAppStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "CHANGE-LOADING-STATUS": {
            return {...state, status: action.status}
        }
        case "SET-ERROR": {
            return {...state, error: action.error}
        }
        default:
            return state;
    }
}

export const ChangeLoadingStatus = (status: StatusType) => {
    return {type: 'CHANGE-LOADING-STATUS', status}
}
export const SetError = (error: string) => {
    return {type: 'SET-ERROR', error}
}
