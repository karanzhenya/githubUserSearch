import * as React from "react";
import s from "./repositories.module.css";
import {UsersStateType} from "../../../redux/profileReducer";
import {Repo} from "./Repo/repo";

type RepositoriesPropType = {
    profile: UsersStateType
}

export const Repositories = (props: RepositoriesPropType) => {
    return (
        <div className={s.repo_container}>
            {
                props.profile.repositories !== undefined ? props.profile.repositories.map(r => {
                    return <Repo profile={props.profile} repo={r}/>
                }) : null}
        </div>
    )
}