import * as React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {GetUserProfileThunk} from "../../../redux/profileReducer";

type FormData = {
    login: string
};

export const SearchField = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();
    const onSubmit = handleSubmit(data => dispatch(GetUserProfileThunk(data.login)));

    return (
        <form onSubmit={onSubmit}>
            <input {...register("login")} />
        </form>
    );
}
