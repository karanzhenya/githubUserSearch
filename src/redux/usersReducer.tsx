import {usersApi} from "../api/usersApi"

export type UsersStateType = {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean
}

const initialState: Array<any> = []
export const usersReducer = (state: Array<UsersStateType> = initialState, action: any) => {
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