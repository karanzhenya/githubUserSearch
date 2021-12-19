import React, {useState} from 'react';
import s from "./paginator.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {GetUserReposCurrentPageTC} from "../../../redux/profileReducer";
import {useDispatch} from "react-redux";


type PaginatorPropTypes = {
    repos: number
}

export const Paginator = (props: PaginatorPropTypes) => {

    const dispatch = useDispatch();
    const [maxPortionPage, setMaxPortionPage] = useState(6)
    const [minProtionPage, setMinPortionPage] = useState(0)
    const [currentPage, setCurrentPage] = useState<number>()

    const totalRepos = Math.ceil(props.repos / 4)

    let pages = []
    for (let i = 1; i <= totalRepos; i++) {
        pages.push(i)
    }
    const getUserReposCurrentPage = (page: number) => {
        setCurrentPage(page)
        dispatch(GetUserReposCurrentPageTC(page))
    }
    const previousCurrentPage = () => {
        if (currentPage && currentPage > 1) {
            dispatch(GetUserReposCurrentPageTC(currentPage - 1))
            setCurrentPage(currentPage - 1)
        }
    }
    const nextCurrentPage = () => {
        if (currentPage) {
            dispatch(GetUserReposCurrentPageTC(currentPage + 1))
            setCurrentPage(currentPage + 1)
        }
    }
//map all pages of repositories
    let reposPages = pages.map(p => p < maxPortionPage ?
        <span className={p === currentPage ? s.currentPage: s.page} onClick={() => getUserReposCurrentPage(p)}>{p}</span> : null)
    return (
        <div className={s.pagination}>
            <ArrowBackIosNewIcon fontSize={"small"} onClick={previousCurrentPage}/>
            {reposPages}
            {totalRepos > 5 ?
                <div><span>...</span>
                    <span onClick={() => getUserReposCurrentPage(totalRepos)}>{totalRepos}</span></div> : null}
            <ArrowForwardIosIcon fontSize={"small"} onClick={nextCurrentPage}/>
        </div>
    )
}