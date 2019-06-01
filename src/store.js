import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	cells: [
  		[{mined:false},{mined:false},{mined:false},{mined:false}],
  		[{mined:false},{mined:false},{mined:true},{mined:false}],
  		[{mined:false},{mined:false},{mined:false},{mined:false}],
  		[{mined:true},{mined:false},{mined:false},{mined:false}]
  	]
  },
  mutations: {

  },
  actions: {

  }
})
