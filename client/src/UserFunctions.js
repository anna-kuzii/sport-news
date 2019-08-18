import axios from 'axios';

export const registerFunc = newUser => {
    return axios.post('http://localhost:5000/register', {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password,
    }).then(handleResponse)
};


function handleResponse(response) {
   
        if (!response.status === 200) {
            const error =  response.statusText;
            return Promise.reject(error);
        }

}