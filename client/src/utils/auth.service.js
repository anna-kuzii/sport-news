import { instance } from '../axios.instanse'

export function getRefreshToken() {
    return localStorage.getItem('refreshToken')
}

export function getAccessToken() {
    return localStorage.getItem('accessToken')
}

export function getExpireTime() {
    return localStorage.getItem('expiresIn')
}

export function refreshTokens() {
    return instance.post('refreshtoken/', {refreshToken: getRefreshToken()})
        .then(response => {
            _setAuthData(response)
        })
}


export function _setAuthData(response) {
    localStorage.setItem('refreshToken', response.data.refreshToken);
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('expiresIn', response.data.expires);
}

export function isAccessTokenExpired() {
    const accessTokenExpDate = getExpireTime();
    const nowTime = Math.floor(new Date().getTime() / 1000);

    return accessTokenExpDate <= nowTime
}
