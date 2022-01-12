import * as React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {GetUserProfileTC} from "../../../redux/profileReducer";
import SearchIcon from '@mui/icons-material/Search';
import s from "./SearchField.module.css"

type FormData = {
    login: string
};

export const SearchField = () => {
    const dispatch = useDispatch();

    const {register, handleSubmit} = useForm<FormData>();
    const onSubmit = handleSubmit(data => {
            dispatch(GetUserProfileTC(data.login.trim()))
        }
    );

    return (
        <form onSubmit={onSubmit}>
            <div className={s.search}>
                <SearchIcon className={s.icon}/><input {...register("login")} />
            </div>
        </form>
    );
}
