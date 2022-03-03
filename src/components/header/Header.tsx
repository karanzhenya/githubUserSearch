import {SearchField} from "./search/SearchField";
import github_icon from "../../assets/github_icon.png"
import s from './Header.module.scss'

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <a href='https://github.com/'>
                    <img src={github_icon} alt='logo'/>
                </a>
                <SearchField/>
            </div>
        </div>
    )
}
