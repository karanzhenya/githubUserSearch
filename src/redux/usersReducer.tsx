import {usersApi} from "../api/usersApi";

const initialState: Array<any> = []
export const usersReducer = (state: Array<any> = initialState, action: any) => {
    switch (action.type) {
        case 'SET_USERS': {
            return [...state] = action.data
        }
        default:
            return state;
    }
}

export const SetUsersAC = (data: any[]) => {
    return {type: 'SET_USERS', data}
}
export const SetUsersThunk = () => async (dispatch: Function) => {
    try {
        let data = await usersApi.getUsers()
        console.log(data.data)
        dispatch(SetUsersAC(data.data))
    } catch (err) {
        console.log(err)
    }

}