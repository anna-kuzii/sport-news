import { instance } from '../axios.instanse'
import { _setAuthData, getRefreshToken } from '../utils/auth.service';

export function refreshTokenAction() {
    return instance.post('refreshtoken/', { refreshToken: getRefreshToken() })
    .then(response => {
        _setAuthData(response)
    })
}