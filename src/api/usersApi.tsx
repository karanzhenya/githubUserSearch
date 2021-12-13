import axios from "axios";

export const usersApi = {
    async getUsers() {
        const response = await axios.get('https://api.github.com/users')
        return response;
    }
}