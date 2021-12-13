import React from 'react';
import s from './main.module.css'
import {useDispatch} from "react-redux";
import {SetUsersThunk} from "../../redux/usersReducer";


function Main() {
    const dispatch = useDispatch();
    const getusers = () => {
        dispatch(SetUsersThunk())
    }
    return (
        <div className={s.main}>
            <div className={s.container}>
                <button onClick={getusers}>get users
                </button>
            </div>
        </div>
    )
}

export default Main;
