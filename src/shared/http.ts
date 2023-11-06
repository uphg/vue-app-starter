import { $loading } from '@/hooks/loading'
import type { JSONValue } from '@/types'
import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { mock } from '../mock/mock'

type GetConfig = Omit<AxiosRequestConfig, 'params' | 'url' | 'method'>
type PostConfig = Omit<AxiosRequestConfig, 'url' | 'data' | 'method'>
type PatchConfig = Omit<AxiosRequestConfig, 'url' | 'data'>
type DeleteConfig = Omit<AxiosRequestConfig, 'params'>

export class HTTPClient {
  instance: AxiosInstance

  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL })
  }

  get<R = unknown>(url: string, query?: Record<string, string>, config?: GetConfig) {
    return this.instance.request<R>({ ...config, url: url, params: query, method: 'get' })
  }

  post<R = unknown>(url: string, data?: Record<string, JSONValue>, config?: PostConfig) {
    return this.instance.request<R>({ ...config, url, data, method: 'post' })
  }

  patch<R = unknown>(url: string, data?: Record<string, JSONValue>, config?: PatchConfig) {
    return this.instance.request<R>({ ...config, url, data, method: 'patch' })
  }

  delete<R = unknown>(url: string, query?: Record<string, string>, config?: DeleteConfig) {
    return this.instance.request<R>({ ...config, url: url, params: query, method: 'delete' })
  }
}

export const http = new HTTPClient('/api/v1')

http.instance.interceptors.request.use((config) => {
  const jwt = localStorage.getItem('jwt')
  console.log(0)
  if (jwt) {
    config.headers!.Authorization = `Bearer ${jwt}`
  }
  if (config._autoLoading) {
    $loading?.open('加载中...')
  }
  return config
})

http.instance.interceptors.response.use(
  (response) => {
    if (response.config._autoLoading === true) {
      $loading?.close()
    }
    return response
  },
  (error: AxiosError) => {
    console.log(1)
    if (error.response?.config._autoLoading === true) {
      $loading?.close()
    }
    throw error
  }
)

// See: https://vitejs.dev/config/build-options.html#build-commonjsoptions
/* #__PURE__ */
http.instance.interceptors.response.use(
  (response) => {
    mock(response)
    if (response.status >= 400) {
      throw { response }
    } else {
      return response
    }
  },
  (error) => {
    mock(error.response)
    if (error.response.status >= 400) {
      throw error
    } else {
      return error.response
    }
  }
)

http.instance.interceptors.response.use(response=>{
  console.log('response')
  return response
}, (error) => {
  if (error.response) {
    const axiosError = error as AxiosError
    if (axiosError.response?.status === 429) {
      $message?.error('请求过于频繁')
    }
  }
  throw error
})


