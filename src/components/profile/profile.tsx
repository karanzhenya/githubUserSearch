import React from 'react';
import s from './profile.module.css'
import {useSelector} from "react-redux";
import {UsersStateType} from "../../redux/usersReducer";
import {AppRootStateType} from "../../redux/store";
import {Avatar} from "./avatar/avatar";
import {Subscriptions} from "./subscriptions/subscriptions";


export const Profile = () => {

    const profile = useSelector<AppRootStateType, UsersStateType>(state => state.profile)
    return (
        <div className={s.main}>
            <div className={s.container}>
                <Avatar avatar_url={profile.avatar_url}/>
                <h1 className={s.name}>{profile.name}</h1>
                <Subscriptions followers={profile.followers} following={profile.following}/>

            </div>
        </div>
    )
}
