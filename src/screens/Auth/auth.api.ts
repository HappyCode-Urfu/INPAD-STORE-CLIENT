import axios from 'axios'
import { IAuth, IAuthState } from 'screens/Auth/auth.atom.ts'
import { IAuthValues, IUser } from 'screens/Auth/auth.types.ts'
import { handleHttpError, handleHttpResponse } from 'services/http'

import config from '../../config.ts'

const login = (data: IAuthValues) => {
  return axios
    .post(config.API_URL + '/auth/sign-in', data)
    .then(handleHttpResponse)
    .catch(handleHttpError)
}

const refresh = async (): Promise<{ auth: IAuth; status: string; items: IUser }> => {
  const resp: IAuthState = await axios
    .get(config.API_URL + '/auth/refresh', { withCredentials: true })
    .then((r) => r.data)
    .catch(() => ({ auth: { accessToken: '', expiresIn: 0 } }))

  return {
    status: 'success' as const,
    auth: {
      accessToken: resp.auth.accessToken,
      expiresIn: resp.auth.expiresIn,
    },
    items: resp.items,
  }
}

const logout = () => {
  return axios
    .post(config.API_URL + '/auth/logout', { withCredentials: true })
    .then(handleHttpResponse)
    .catch(handleHttpError)
}

const authApi = {
  login,
  refresh,
  logout,
}

export default authApi
