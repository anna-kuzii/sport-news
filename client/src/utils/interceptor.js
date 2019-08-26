import axios from 'axios';
import { Promise } from 'es6-promise';
import * as authService from './auth.service';
import authToken from './AuthToken'

export default () => {
    axios.interceptors.response.use((response) => {
        authToken(authService.getAccessToken());
        if (authService.isAccessTokenExpired() && authService.getRefreshToken()) {
            return authService.refreshTokens()
                .then(response => {
                    authToken(response.data.accessToken)
                    return response
                }).catch(error => Promise.reject(error))
        } else {
            return response
        }
    }, (error) => {
        return Promise.reject(error)
    });
}