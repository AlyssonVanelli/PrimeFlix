import axios from 'axios'

//Base URL = https://api.themoviedb.org/3/
//Api key = c8cb28a88ed31bb1905aea8ead814cc0

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api