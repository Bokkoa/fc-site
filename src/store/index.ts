import { createStore } from 'vuex'
import { projects, IProject } from '../data/projects';

export interface IState {
  baseUrl: string,
  projects: IProject[],
  showProjectModal: boolean,
  selectedProject: null | IProject
}

export default createStore<IState>({
  state: {
    baseUrl: process.env.VUE_APP_BASE_URL,
    projects,
    showProjectModal: false,
    selectedProject: null
  },
  mutations: {
    toggleProjectModal: (state) => {
      state.showProjectModal = !state.showProjectModal
    },
    selectProject: (state, projectId: number) => {
      const project = state.projects.find( p => p.id === projectId )
      if (project != null && project !== undefined) { 
        state.selectedProject = project
        state.showProjectModal = true
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
