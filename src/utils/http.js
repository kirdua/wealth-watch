import axios from 'axios'
import { parse, stringify } from 'qs'
import { apiKey } from './apikey'

const httpClient = axios.create({
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
  },
  paramsSerializer: {
    encode: parse,
    serialize: (val) => stringify(val, { arrayFormat: 'comma' })
  }
})

export function baseURL() {
  return `https://yahoo-finance15.p.rapidapi.com`
}

export function endpoint(baseURL, path) {
  return path ? `${baseURL}/${path}` : baseURL
}

export function post(uri, data, opts = {}) {
  return httpClient.post(uri, data, opts)
}

export function put(uri, data, opts = {}) {
  return httpClient.put(uri, data, opts)
}

export function remove(uri, opts = {}) {
  return httpClient.delete(uri, opts)
}

export function get(uri, params = {}, opts = {}) {
  return httpClient.get(uri, {
    ...opts,
    params
  })
}

export default {
  get,
  post,
  put,
  remove,
  baseURL,
  endpoint
}
