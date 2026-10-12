import axios from "axios"

const URL_BASE = "https://6aab23a5ea0e22daa6dbcf5b.mockapi.io"

export async function getUsers(){
    const response = await axios.get(`${URL_BASE}/users`)

 const productos = response.data
 return productos
}

export async function getUsersById(id){
    const response = await axios.get(`${URL_BASE}/users/${id}`);

    const producto = response.data;
    return producto;
}

export async function createUser(user) {
    const response = await axios.post(`${URL_BASE}/users`,  user)
    return response.data
    
}