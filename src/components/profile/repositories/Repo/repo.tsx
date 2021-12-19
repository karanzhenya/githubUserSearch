import * as React from "react";
import s from "./repo.module.css";
import {UserReposType, UsersStateType} from "../../../../redux/profileReducer";
import Paper from "@mui/material/Paper";

type RepositoriesPropType = {
    profile: UsersStateType,
    repo: UserReposType
}

export const Repo = (props: RepositoriesPropType) => {
    return (
        <Paper elevation={1}>
            <div className={s.repo_block}>
                <a target="_blank" rel="noreferrer"
                   href={`https://github.com/${props.profile.login}/${props.repo.name}`}>{props.repo.name}</a>
                <div className={s.repo_description}>
                    {props.repo.description}
                </div>
            </div>
        </Paper>
    )
}