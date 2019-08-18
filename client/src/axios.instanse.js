import axios from 'axios';
require('dotenv').config();
export const postReq = (path, data) =>{
    return axios.post(process.env.REACT_APP_SERVER_URL + path, data)
};