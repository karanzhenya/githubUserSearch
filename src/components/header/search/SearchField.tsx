import * as React from "react";
import {useDispatch} from "react-redux";
import {GetUserProfileTC} from "../../../redux/profileReducer";
import SearchIcon from '@mui/icons-material/Search';
import s from "./SearchField.module.scss"
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../../App";

export const SearchField = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            login: ''
        },
        onSubmit: values => {
            dispatch(GetUserProfileTC(values.login.trim()))
            navigate(`${PATH.PROFILE}/${formik.values.login}`)
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <section className={s.search}>
                <SearchIcon className={s.icon}/>
                <input name="login"
                       onChange={formik.handleChange}
                       value={formik.values.login}/>
            </section>
        </form>
    );
}
