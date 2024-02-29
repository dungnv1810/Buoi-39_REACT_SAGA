import axios from "axios";
const BASE_URL = 'https://637a3fd17419b414df9d2045.mockapi.io'

export const getListUserApi = () => {
    return axios.get(`${BASE_URL}/username`)
}
export const getAddUserApi = (user) => {
    return axios.post(`${BASE_URL}/username`, user)
}
export const getDeleteApi = (userId) => {
    return axios.delete(`${BASE_URL}/username/${userId}`)
}
export const getEditApi = (user, userId) => {
    return axios.put(`${BASE_URL}/username/${userId}`, user)
}