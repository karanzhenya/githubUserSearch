import React from 'react';
import s from './profile.module.css'
import {useSelector} from "react-redux";
import {UsersStateType} from "../../redux/profileReducer";
import {AppRootStateType} from "../../redux/store";
import {Avatar} from "./avatar/avatar";
import {Subscriptions} from "./subscriptions/subscriptions";
import {Repositories} from "./repositories/repositories";


export const Profile = () => {

    const profile = useSelector<AppRootStateType, UsersStateType>(state => state.profile)
    if (profile.id === 0) {
        return <h1>Please, find user in base!</h1>
    }
    return (
            <div className={s.container}>
                <div className={s.left_part}>
                    <Avatar avatar_url={profile.avatar_url}/>
                    <h1 className={s.name}>{profile.name}</h1>
                    <a target="_blank" rel="noreferrer" href={`https://github.com/${profile.login}`}>{profile.login}</a>
                    <Subscriptions followers={profile.followers} following={profile.following}/>
                </div>
                <div className={s.right_part}>
                    <h1>Repositories ({profile.public_repos})</h1>
                    <Repositories profile={profile} key={profile.id}/>
                </div>
            </div>
    )
}
