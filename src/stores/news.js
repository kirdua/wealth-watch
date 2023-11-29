import { defineStore } from 'pinia'

export const useMarketNewsStore = defineStore('marketNewsList', {
  state: () => ({
    marketNews: []
  }),
  actions: {
    getMarketNews() {}
  },
  getters: {}
})
