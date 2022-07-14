import { createStore } from 'vuex'
// import random_name from 'node-random_name'
import {friendsModule} from './modules/friend.module'

export default createStore({
  state: {
    msg: "Welcome to Your Vue.js App",
    firstName: "Michael",
    lastName: "Menebraye",
    
  },
  getters: {
    fullName(state){
        return `${state.firstName} ${state.lastName}` 
    }
  },
  mutations: {
    
  },
  actions: {
    
  },
  modules: {
    friendsModule
  }
})
