import {InitialProfileStateType} from "../../../redux/profileReducer";
import {Repo} from "./Repo/Repo";
import s from "../Profile.module.scss";

type RepositoriesPropType = {
    profile: InitialProfileStateType
}

export const Repositories = (props: RepositoriesPropType) => {
    return (
        <div className={s.repo_container}>
            {
                props.profile.repositories !== undefined ? props.profile.repositories.map(r => {
                    return <Repo key={r.id} profile={props.profile} repo={r}/>
                }) : null}
        </div>
    )
}