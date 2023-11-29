import http from '@/utils/http'
import { endpoint, baseURL } from './_utils'

//'https://yahoo-finance15.p.rapidapi.com/api/v1/markets/news',

export function getMarketNews(tickers) {
  return http.get(endpoint(`markets/news`))
}
