import Cookies from 'js-cookie'

const AuthKey = 'Auth-Role'

export function setAuthToken(token) {
  return Cookies.set(AuthKey, token)
}

export function getAuthToken() {
  return Cookies.get(AuthKey)
}
