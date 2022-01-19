import React, {useEffect} from 'react';
import s from './App.module.css';
import {Profile} from "./components/profile/Profile";
import Header from "./components/header/Header";
import {Route, Routes, useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {InitialProfileStateType} from "./redux/profileReducer";
import StartPage from "./components/startPage/StartPage";
import {InitialAppStateType} from "./redux/appReducer";

function App() {

    const navigate = useNavigate();

    const profile = useSelector<AppRootStateType, InitialProfileStateType>(state => state.profile)
    const appState = useSelector<AppRootStateType, InitialAppStateType>(state => state.app)
    useEffect(() => {
        if (appState.status === "failed") {
            navigate('404')
        }
    }, [appState.status])
    return (
        <div className={s.app}>
            <Header/>
            <Routes>
                <Route path='/' element={<StartPage/>}/>
                <Route path='404' element={<h1 style={{padding: "100px"}}>Page not found!</h1>}/>
                <Route path={`/profile/${profile.login}`} element={<Profile profile={profile} appState={appState}/>}/>
            </Routes>
        </div>
    )
}

export default App;
