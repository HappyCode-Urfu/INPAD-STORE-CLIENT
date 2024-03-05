import axios, { AxiosError, AxiosResponse } from 'axios'
import { Dispatch, MutableRefObject, SetStateAction } from 'react'
import authApi from 'screens/Auth/auth.api.ts'
import { IAuthState } from 'screens/Auth/auth.atom.ts'
import eventBus from 'services/eventBus'
import { IHTTPErrorResponse, IHTTPSuccessResponse } from 'services/http/http.types.ts'

import config from '../../config.ts'

const http = axios.create({
  baseURL: config.API_URL,
  withCredentials: true,
})

let interceptorsApplied = false
export const applyInterceptors = (
  authState: MutableRefObject<IAuthState>,
  setAuthState: Dispatch<SetStateAction<IAuthState>>
) => {
  if (interceptorsApplied) return
  interceptorsApplied = true
  let isRefreshing = false

  let refreshRequest = Promise.resolve({
    auth: {
      accessToken: authState.current.auth.accessToken,
      expiresIn: authState.current.auth.expiresIn,
    },
    items: authState.current.items,
  })

  const ensureAuthorization = (): Promise<IAuthState> => {
    const shouldRefresh = !authState || Date.now() > authState.current.auth.expiresIn

    return shouldRefresh ? refreshToken() : Promise.resolve(authState.current)
  }

  const refreshToken = async (): Promise<IAuthState> => {
    if (isRefreshing) return refreshRequest
    isRefreshing = true

    refreshRequest = authApi.refresh().finally(() => (isRefreshing = false))
    return refreshRequest
  }

  http.interceptors.request.use((config) => {
    return ensureAuthorization().then(({ auth, items }) => {
      setAuthState((prevAuthState) => ({
        ...prevAuthState,
        auth: {
          accessToken: auth.accessToken,
          expiresIn: auth.expiresIn,
        },
        items: items,
      }))

      config.headers.Authorization = `Bearer ${auth.accessToken}`
      return config
    })
  })

  http.interceptors.response.use(
    (response) => response,
    (err) => {
      const shouldLogout = err.response && err.response.status === 401

      if (shouldLogout) {
        setAuthState({
          auth: { accessToken: '', expiresIn: 0 },
          items: {
            name: '',
            surname: '',
            patronymic: '',
            email: '',
            phone_number: '',
            roles: [],
          },
        })
      }

      throw err
    }
  )
}

export const handleHttpResponse = <T extends any>(
  response: AxiosResponse<T>
): IHTTPSuccessResponse<T> => {
  return { status: 'success', body: response.data }
}

export const handleHttpError = (error: AxiosError): IHTTPErrorResponse => {
  if (error?.response?.status === 429) {
    const message = 'Слишком много запросов..'
    eventBus.pub('http.error', { message, code: error?.response?.status })

    return { status: 'error', message, code: error?.response?.status }
  }

  if (error?.response?.status === 404) {
    eventBus.pub('http.error', {
      message: 'Запрашиваемый ресурс не найден',
      code: error?.response?.status,
    })
  }

  if (error?.response?.status === 400) {
    return {
      status: 'error',
      message: 'С вашими данными что-то не так',
      code: error?.response?.status,
      body: error?.response?.data as Record<string, string>,
    }
  }

  const message = 'Произошла непредвиденная ошибка'
  eventBus.pub('http.error', { message, code: error?.response?.status })

  return {
    status: 'error',
    message: error?.message,
    code: error?.response?.status,
  }
}

export default http
