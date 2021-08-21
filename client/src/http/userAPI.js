import jwt_decode from "jwt-decode";
import axios from "axios";
import { $authHost } from "./index";

export const registration = async (email, password) => {
    const { data } = await axios.post('http://localhost:5000/api/user/registration', { email, password, role: 'USER' })
    localStorage.setItem('token', data.token)
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
    return jwt_decode(data.token)
}


export const login = async (email, password) => {
    const { data } = await axios.post('http://localhost:5000/api/user/login', { email, password })
    localStorage.setItem('token', data.token)
    localStorage.setItem("email", email)
    return jwt_decode(data.token)
}

export const check = async () => {
    const { data } = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}