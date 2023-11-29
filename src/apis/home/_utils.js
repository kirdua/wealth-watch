import http from '@/utils/http'

export const baseURL = () => http.baseURL()
export const endpoint = (path, version = '1') => http.endpoint(baseURL(), `api/v${version}/${path}`)

export default {
  baseURL,
  endpoint
}
