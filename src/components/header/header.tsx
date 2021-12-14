import React from 'react';
import s from './header.module.css'
import {SearchField} from "./Search/Search";

function Header() {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <div className={s.logo}>
                    <img src={''} alt='logo'/>
                </div>
                <div className={s.search}>
                    <SearchField />
                </div>
            </div>
        </div>
    )
}

export default Header;
