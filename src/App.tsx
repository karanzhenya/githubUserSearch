import React from 'react';
import s from './App.module.css';
import Header from "./components/header/header";
import {Profile} from "./components/profile/profile";

function App() {

    return (
        <div className={s.app}>
            <Header/>
            <Profile/>
        </div>
    )
}

export default App;
