import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.github.com/users/'
})

export const usersApi = {
    async getUserProfile(login: string) {
        const data = await instance.get(`${login}`)
        return data
    },
    async getUserRepos(login: string) {
        const data = await instance.get(`${login}/repos?per_page=4`)
        return data.data
    },
    async getUserReposCurrentPage(login: string, page: number) {
        const data = await instance.get(`${login}/repos?per_page=4&page=${page}`)
        return data.data
    }
}