import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	cells: [
  		[{mined:false, revealed: false},{mined:false, revealed: false},{mined:false, revealed: false},{mined:false, revealed: false}],
  		[{mined:false, revealed: false},{mined:false, revealed: false},{mined:true, revealed: false},{mined:false, revealed: false}],
  		[{mined:false, revealed: false},{mined:false, revealed: false},{mined:false, revealed: false},{mined:false, revealed: false}],
  		[{mined:true, revealed: false},{mined:false, revealed: false},{mined:false, revealed: false},{mined:false, revealed: false}]
  	]
  },
  mutations: {
  	reveal(state, {row, col}) {
  		state.cells[row][col].revealed = true;
  	}
  },
  actions: {
  	revealCell({ commit }, { coordinates }) {
  		commit('reveal', coordinates)
  	}
  }
})
