import axios from "axios";

export const usersApi = {
    async getUserProfile (login: string) {
        const data = await axios.get(`https://api.github.com/users/${login}`)
        return data
    },
    async getUserRepos (login: string) {
        const data = await axios.get(`https://api.github.com/users/${login}/repos?per_page=4`)
        return data.data
    },
     async getUserReposCurrentPage (login: string, page: number) {
         const data = await axios.get(`https://api.github.com/users/${login}/repos?per_page=4&page=${page}`)
         return data.data
     }
}