import { createStore } from 'vuex'
import { projects } from '../data/projects';

export default createStore({
  state: {
    baseUrl: process.env.VUE_APP_BASE_URL,
    projects
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
