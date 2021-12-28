import React from 'react';
import {SearchField} from "./search/SearchField";
import github_icon from "../../utils/github_icon.png"
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <div className={s.container}>
                    <a href='https://github.com/'><img src={github_icon} alt='logo'/></a>
                    <SearchField/>
            </div>
        </div>
    )
}

export default Header;
