import {Route, Routes, useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import {useEffect} from 'react';
import {Profile} from "./components/profile/Profile";
import {Header} from "./components/header/Header";
import {StartPage} from "./components/startPage/StartPage";
import {AppRootStateType} from "./redux/store";
import {InitialProfileStateType} from "./redux/profileReducer";
import {InitialAppStateType} from "./redux/appReducer";
import s from './App.module.scss'

export const PATH = {
    START_PAGE: 'githubUserSearch',
    PAGE404: '404',
    PROFILE: `githubUserSearch/profile/`
}

export const App = () => {

    const navigate = useNavigate();

    const profile = useSelector<AppRootStateType, InitialProfileStateType>(state => state.profile)
    const appState = useSelector<AppRootStateType, InitialAppStateType>(state => state.app)

    useEffect(() => {
        if (appState.status === "failed") {
            navigate(PATH.PAGE404)
        }
        if (profile.id === 0) {
            navigate(PATH.START_PAGE)
        }
    }, [appState.status])

    return (
        <div className={s.app}>
            <Header/>
            <Routes>
                <Route path={PATH.START_PAGE} element={<StartPage/>}/>
                <Route path={PATH.PAGE404} element={<h1 style={{padding: "100px"}}>Page not found!</h1>}/>
                <Route path={PATH.PROFILE + `${profile.login}`}
                       element={<Profile profile={profile} appState={appState}/>}/>
            </Routes>
        </div>
    )
}