import axios from 'axios';
require('dotenv').config();

export  const instance = axios.create();
instance.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

