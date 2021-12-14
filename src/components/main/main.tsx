import React, {useState} from 'react';
import s from './main.module.css'
import {useDispatch, useSelector} from "react-redux";
import {UsersStateType} from "../../redux/usersReducer";
import {AppRootStateType} from "../../redux/store";


function Main() {
    const profile = useSelector<AppRootStateType, UsersStateType>(state => state.profile)
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.avatar}>
                    {profile.avatar_url !== '' ? <img alt='avatar' src={profile.avatar_url}/> : null}
                </div>
            </div>
        </div>
    )
}

export default Main;
