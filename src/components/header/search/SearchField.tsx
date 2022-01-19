import * as React from "react";
import {useDispatch} from "react-redux";
import {GetUserProfileTC} from "../../../redux/profileReducer";
import SearchIcon from '@mui/icons-material/Search';
import s from "./SearchField.module.css"
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";

export const SearchField = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            login: ''
        },
        onSubmit: values => {
            dispatch(GetUserProfileTC(values.login.trim()))
            navigate(`profile/${formik.values.login}`)
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={s.search}>
                <SearchIcon className={s.icon}/><input  name="login"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.login}/>
            </div>
        </form>
    );
}
