import {usersApi} from "../api/usersApi"
import {Dispatch} from "redux";
import {AppRootStateType} from "./store";
import {ChangeLoadingStatus, SetError} from "./appReducer";


export type InitialProfileStateType = {
    login: string,
    id: number,
    avatar_url: string,
    url: string,
    followers_url: string,
    following_url: string,
    repos_url: string,
    public_repos: string,
    name: string,
    followers: number,
    following: number,
    repositories: Array<UserReposType>
}
export type UserReposType = {
    allow_forking: boolean
    archive_url: string
    archived: boolean
    assignees_url: string
    blobs_url: string
    branches_url: string
    clone_url: string
    collaborators_url: string
    comments_url: string
    commits_url: string
    compare_url: string
    contents_url: string
    contributors_url: string
    created_at: string
    default_branch: string
    deployments_url: string
    description: string
    disabled: boolean
    downloads_url: string
    events_url: string
    fork: boolean
    forks: number
    forks_count: number
    forks_url: string
    full_name: string
    git_commits_url: string
    git_refs_url: string
    git_tags_url: string
    git_url: string
    has_downloads: boolean
    has_issues: boolean
    has_pages: boolean
    has_projects: boolean
    has_wiki: boolean
    homepage: string
    hooks_url: string
    html_url: string
    id: number
    is_template: boolean
    issue_comment_url: string
    issue_events_url: string
    issues_url: string
    keys_url: string
    labels_url: string
    language: string
    languages_url: string
    license: {}
    merges_url: string
    milestones_url: string
    mirror_url: null
    name: string
    node_id: string
    notifications_url: string
    open_issues: number
    open_issues_count: number
    owner: {}
    private: boolean
    pulls_url: string
    pushed_at: string
    releases_url: string
    size: number
    ssh_url: string
    stargazers_count: number
    stargazers_url: string
    statuses_url: string
    subscribers_url: string
    subscription_url: string
    svn_url: string
    tags_url: string
    teams_url: string
    topics: []
    trees_url: string
    updated_at: string
    url: string
    visibility: string
    watchers: number
    watchers_count: number
}

const initialState: InitialProfileStateType = {} as InitialProfileStateType

type SetUserProfileActionType = {
    type: 'SET_USER_PROFILE',
    data: InitialProfileStateType
}
type SetUserReposActionType = {
    type: 'SET_USER_REPOS',
    repos: UserReposType[]
}

type ActionsType =
    SetUserProfileActionType
    | SetUserReposActionType;

export const profileReducer = (state: InitialProfileStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET_USER_PROFILE': {
            let stateCopy = {...state}
            stateCopy = action.data
            return stateCopy
        }
        case "SET_USER_REPOS": {
            let stateCopy = {...state}
            stateCopy.repositories = action.repos
            return stateCopy
        }
        default:
            return state;
    }
}

export const SetUserProfile = (data: InitialProfileStateType) => {
    return {type: 'SET_USER_PROFILE', data}
}
export const SetUserRepositories = (repos: Array<UserReposType>) => {
    return {type: 'SET_USER_REPOS', repos}
}

export const GetUserProfileTC = (login: string) => async (dispatch: Dispatch) => {
    dispatch(ChangeLoadingStatus("loading"))
    try {
        const data = await usersApi.getUserProfile(login)
        dispatch(SetUserProfile(data.data))
        const repos = await usersApi.getUserRepos(login)
        dispatch(SetUserRepositories(repos))
    } catch (err) {
        if (err) {
            dispatch(SetError("User not found"))
        }
    } finally {
        dispatch(ChangeLoadingStatus("success"))
    }
    /*dispatch(ChangeLoadingStatus())
    usersApi.getUserProfile(login)
        .then((res) => {
            dispatch(SetUserProfile(res.data))
        })
        .catch((err: AxiosError) => {
            console.log("User " + err.response?.data.message)
            dispatch(ChangeLoadingStatus())
        })
    usersApi.getUserRepos(login).then((repos) => {
        dispatch(SetUserRepositories(repos))
    })*/

}
export const GetUserReposCurrentPageTC = (page: number) => async (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const login = getState().profile.login
    try {
        const repos = await usersApi.getUserReposCurrentPage(login, page)
        dispatch(SetUserRepositories(repos))
    } catch (err) {
        console.log(err)
    }
}
