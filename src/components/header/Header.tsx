import {SearchField} from "./search/SearchField";
import github_icon from "../../assets/github_icon.png"
import s from './Header.module.scss'
import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true
})

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <a href='https://github.com/'>
                    <img src={github_icon} alt='logo'/>
                </a>
                <button onClick={() => {
                    instance.get('/data').then((res)=> {
                        console.log(res.data)
                    })
                }}>click</button>
                <SearchField/>
            </div>
        </div>
    )
}
