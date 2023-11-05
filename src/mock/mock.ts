import type { AxiosResponse } from 'axios'
import { mockUser } from './user'

export const mock = (response?: AxiosResponse) => {
  switch (response?.config?._mock) {
    case 'user':
      [response.status, response.data] = mockUser(response.config)
      return true
  }
  return false
}
