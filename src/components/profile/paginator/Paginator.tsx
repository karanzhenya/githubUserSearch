import {useState} from 'react';
import {useDispatch} from "react-redux";
import {GetUserReposCurrentPageTC} from "../../../redux/profileReducer";
import Pagination from "@mui/material/Pagination";


type PaginatorPropTypes = {
    repos: number
}

export const Paginator = (props: PaginatorPropTypes) => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState<number>(1)

    const totalRepos = Math.ceil(props.repos / 4)

    let pages = []
    for (let i = 1; i <= totalRepos; i++) {
        pages.push(i)
    }
    const getUserReposCurrentPage = (page: number) => {
        setCurrentPage(page)
        dispatch(GetUserReposCurrentPageTC(page))
    }
    return (
        <Pagination shape={"rounded"} count={totalRepos} page={currentPage} onChange={(_, numPage) => {
            getUserReposCurrentPage(numPage)
        }}/>
    )
}