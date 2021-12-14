import axios from "axios";

export const usersApi = {
    async getUsers() {
        const response = await axios.get('https://api.github.com/users')
        return response;
    },
    async getUserProfile (login: string) {
        const data = await axios.get(`https://api.github.com/users/${login}`)
        return data.data
    }
}