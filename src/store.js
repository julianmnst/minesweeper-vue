import Vue from 'vue'
import Vuex from 'vuex'

const ROWS = 8,
	COLS = 8,
	MINES = 10;

Vue.use(Vuex)

// Board generation functions
/**
 * Generates a random number in a range (max excluded)
 * I will use this function to set the mine locations
 * @returns number
 */
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Populate an empty CELLS array and return one with the mines set in position.
 */
function populateBoard() {
	let rows = new Array(ROWS);

	for (let i = 0; i < rows.length; i++) {
		rows[i] = new Array(COLS);

	  	for (let j = 0; j < rows[i].length; j++) {
		  	rows[i][j] = {
		  		mined: false,
		  		revealed: false
		  	};
		}
	}

	return rows
}

/**
 * Sets the coordinates for N mines
 */
function setMines(cells, limit) {
	let coordinates = [];
	for (let i = 0; i < limit; i++) {
		coordinates.push([
			getRandomArbitrary(0, ROWS),
			getRandomArbitrary(0, COLS)
		])
	}

	return coordinates;
}

/**
 * Store
 */
export default new Vuex.Store({
  state: {
  	cells: populateBoard()
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
