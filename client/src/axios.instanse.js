import axios from 'axios';
require('dotenv').config();

export  var instance = axios.create(
    {
        baseURL : process.env.REACT_APP_SERVER_URL
    }
);

