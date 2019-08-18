import { postReq } from './axios.instanse';
require('dotenv').config();

export const registerFunc = newUser => {
     return postReq('/register', newUser).then(handleResponse)
};


function handleResponse(response) {

        if (response.status !== 200) {
            const error =  response.statusText;
            return Promise.reject(error);
        }
}