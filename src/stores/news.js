import { defineStore } from 'pinia'
import { getMarketNews } from '../apis/home'

export const useMarketNewsStore = defineStore('marketNewsList', {
  state: () => ({
    marketNews: [],
    loading: false
  }),
  actions: {
    async fetchMarketNews() {
      this.loading = true
      try {
        const { data } = await getMarketNews()
        this.marketNews = data.body.splice(0, 6)
      } catch (e) {
        console.error(e)
      }

      this.loading = false
    }
  },
  getters: {}
})
