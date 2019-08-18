import axios from 'axios';
const BASE_URL = "http://localhost:5000";

export const postReq = (path, data) =>{
    return axios.post(BASE_URL + path, data)
};