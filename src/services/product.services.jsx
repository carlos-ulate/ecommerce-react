import axios from "axios"

const URL_BASE = "https://6aab23a5ea0e22daa6dbcf5b.mockapi.io"

export async function getProducts(){
    const response = await axios.get(`${URL_BASE}/products`)

 const productos = response.data
 return productos
}

export async function getProductById(id){
    const response = await axios.get(`${URL_BASE}/products/${id}`);

    const producto = response.data;
    return producto;
}