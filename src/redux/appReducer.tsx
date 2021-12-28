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
            let stateCopy = {...state}
            stateCopy.status = action.status
            return stateCopy
        }
        case "SET-ERROR": {
            let stateCopy = {...state}
            stateCopy.error = action.error
            return stateCopy
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
