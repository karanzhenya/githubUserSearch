import React from 'react';
import s from './header.module.css'
import {SearchField} from "./Search/SearchField";
import github_icon from "../../utils/github_icon.png"

function Header() {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <div className={s.logo}>
                    <a href='https://github.com/'><img src={github_icon} alt='logo'/></a>
                </div>
                <div className={s.search}>
                    <SearchField/>
                </div>
            </div>
        </div>
    )
}

export default Header;
