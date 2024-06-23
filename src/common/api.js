import axios from 'axios';
import { apiKey, baseURL } from '../constants/api-url';


const api = axios.create({
  baseURL: baseURL, 
  headers: {
    'Content-Type': 'application/json',
    'Authorization':apiKey  
  },
});


export async function getProducts(perPage=10){
  const response = await api.get(`api/auth/get_products?perPage=${perPage}`)
  return response.data  
}


export async function getSearchProduct(productName=""){
  const response = await api.get(`api/auth/get_products?product_name=${productName}`)
  return response.data
}

export async function getBanner(){
  const response = await api.get("api/auth/banners")
  return response.data
}



export default api;