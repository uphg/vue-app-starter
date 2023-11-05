import type { AxiosRequestConfig } from 'axios'
import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module 'axios' {
  export interface AxiosRequestConfig {
    _autoLoading?: boolean
    _mock?: string
  }
}

declare module 'vue' {
  interface HTMLAttributes extends AttributifyAttributes {}
}
