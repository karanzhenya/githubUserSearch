import {usersApi} from "../api/usersApi"
import {UsersStateType} from "./usersReducer";

const initialState: UsersStateType = {
    login: "",
    id: 0,
    node_id: "",
    avatar_url: "",
    gravatar_id: "",
    url: "",
    html_url: "",
    followers_url: "",
    following_url: "",
    gists_url: "",
    starred_url: "",
    subscriptions_url: "",
    organizations_url: "",
    repos_url: "",
    events_url: "",
    received_events_url: "",
    type: "",
    site_admin: false,
    name: "",
    followers: 0,
    following: 0
}
export const profileReducer = (state: UsersStateType = initialState, action: any) => {
    switch (action.type) {
        case 'SET_USER_PROFILE': {
            let stateCopy = {...state}
            return stateCopy = action.data
        }
        default:
            return state;
    }
}

export const SetUserProfile = (data: any) => {
    return {type: 'SET_USER_PROFILE', data}
}
export const GetUserProfileThunk = (login: string) => async (dispatch: Function) => {
    try {
        let data = await usersApi.getUserProfile(login)
        console.log(data)
        dispatch(SetUserProfile(data))
    } catch (err) {
        console.log(err)
    }

}