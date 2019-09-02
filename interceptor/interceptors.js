const axios = require('axios')

export const createSetAuthInterceptor = (token) => config => {
  if (options.access) {
    config.headers.Authorization = options.access
  } else {
    delete config.headers.Authorization
  }
  return config
}

//TODO MAKE A NORMAL CODE
axios.interceptors.request.use((config) => {
  let originalRequest = config
  const token = localStorage.getItem('accessToken')
  if (tokenIsExpired && path_is_not_login) {
    return issueToken().then((token) => {
      originalRequest['Authorization'] = 'Bearer ' + token;
      return Promise.resolve(originalRequest);
    });
  }
  return config;
}, (err) => {
  return Promise.reject(err);
})


axios.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response.status === 401) {

  }
  return error
})
