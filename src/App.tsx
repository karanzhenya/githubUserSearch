import React from 'react';
import s from './App.module.css';
import {Profile} from "./components/profile/Profile";
import Header from "./components/header/Header";

function App() {

    return (
        <div className={s.app}>
            <Header/>
            <Profile/>
        </div>
    )
}

export default App;
