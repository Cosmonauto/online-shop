import axios from "axios";
import { $authHost } from "./index";

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const { data } = await axios.get('http://localhost:5000/api/type')
    return data
}

export const createBrand = async (brand) => {
    const { data } = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const { data } = await axios.get('http://localhost:5000/api/brand',)
    return data
}

export const createDevice = async (device) => {
    const { data } = await $authHost.post('api/device', device)
    console.log(data)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit = 6) => {
    const { data } = await axios.get('http://localhost:5000/api/device', {
        params: {
            typeId, brandId, page, limit
        }
    })
    console.log(data, "data")
    return data
}

export const fetchOneDevice = async (id) => {
    const { data } = await axios.get('http://localhost:5000/api/device/' + id)
    return data
}


export const deleteItem = async (id) => {
    const { data } = await $authHost.delete('api/device/' + id)
    return data
}

export const editItem = async (id) => {
    const { data } = await $authHost.patch('api/device/edit' + id)
    return data
}


