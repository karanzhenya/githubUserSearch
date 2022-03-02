import React from 'react';
import s from './Profile.module.scss'
import {InitialProfileStateType} from "../../redux/profileReducer";
import {Avatar} from "./avatar/Avatar";
import {Subscriptions} from "./subscriptions/Subscriptions";
import {Repositories} from "./repositories/Repositories";
import {Paginator} from "./paginator/Paginator";
import LinearProgress from '@material-ui/core/LinearProgress';
import StartPage from "../startPage/StartPage";
import {InitialAppStateType} from "../../redux/appReducer";

type ProfilePropType = {
    profile: InitialProfileStateType,
    appState: InitialAppStateType
}
export const Profile = ({profile, appState}: ProfilePropType) => {

    if (appState.status === "loading") {
        return <LinearProgress color="primary" className={s.preloader}/>
    }
    if (profile.id === undefined) {
        return <StartPage/>
    } else {
        return (
            <div className={s.container}>
                <div className={s.left_part}>
                    <img alt='avatar' src={profile.avatar_url}/>
                    <h1 className={s.name}>{profile.name}</h1>
                    <a target="_blank" rel="noreferrer" href={`https://github.com/${profile.login}`}>{profile.login}</a>
                    <Subscriptions followers={profile.followers} following={profile.following}/>
                </div>
                <div className={s.right_part}>
                    <h1>Repositories ({profile.public_repos})</h1>
                    <Repositories profile={profile} key={profile.id}/>
                    <Paginator repos={Number(profile.public_repos)}/>
                </div>
            </div>
        )
    }


}
