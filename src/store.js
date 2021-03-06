import Vue from 'vue'
import Vuex from 'vuex'

const ROWS = 8,
	COLS = 8,
	MINES_LIMIT = 10;

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
		  		revealed: false,
		  		flagged: false
		  	};
		}
	}

	rows = setMines(rows, MINES_LIMIT);

	return rows;
}


/**
 * Sets the coordinates for N mines
 * returns the cells with 'mined' property set to TRUE
 */
function setMines(cells, limit) {
	let coordinates = [];

	for (let i = 0; (coordinates.length) < limit; i++) {
		let newCoordinates = [
			getRandomArbitrary(0, ROWS),
			getRandomArbitrary(0, COLS)
		];

		coordinates.push(newCoordinates)
	}

	coordinates.map((coord) => {
		cells[coord[0]][coord[1]].mined = true;
	});

	return cells;
}

/**
 * returns the relative coordinates for adjacent cells to a specific one
 */
function getAdjacentCoordinates({ row, col }) {
	let coordinates = [];

	// Check if cell has upper row
	if (row > 0) {
		coordinates.push({row: row - 1, col});

		if (col > 0) {
			coordinates.push({row: row - 1, col: col - 1});
		}

		if (col < COLS - 1) {
			coordinates.push({row: row - 1, col: col + 1});
		}
	}

	//  Check center row
	if (col > 0) {
		coordinates.push({row: row, col: col - 1});
	}

	if (col < COLS - 1) {
		coordinates.push({row: row, col: col + 1});
	}

	// Check lower row
	if (row < ROWS - 1) {
		coordinates.push({row: row + 1, col});

		if (col > 0) {
			coordinates.push({row: row + 1, col: col - 1});
		}

		if (col < COLS - 1) {
			coordinates.push({row: row + 1, col: col + 1});
		}
	}

	return coordinates;
}

function hasAdjacentMines(cellsToReveal, state) {
	let hasMines = false

	cellsToReveal.map(({row, col}) => {
		if (state.cells[row][col].mined) {
			hasMines = true;
		}
	});

	return hasMines;
}

function revealAll(state, {row, col}) {
	let adjacentCells = getAdjacentCoordinates({row, col});
	if (hasAdjacentMines(adjacentCells, state)) {
		return false;
	}
	else {
		revealAdjacents(state, {row, col})
	}

	for (let i = 0; i < adjacentCells.length; i++) {
	  	if (!hasAdjacentMines(getAdjacentCoordinates(adjacentCells[i]), state)) {
	  		revealAdjacents(state, adjacentCells[i]);
	  	}
	}
}

function revealAdjacents(state, {row, col}) {
	let adjacentCells = getAdjacentCoordinates({row, col});
	adjacentCells.map(cell => {
		state.cells[cell.row][cell.col].revealed = true;
	});
}

/**
 * Store
 */
export default new Vuex.Store({
  state: {
  	cells: populateBoard(),
  	gameStatus: 'in progress',
  	ROWS: 8,
  	COLS: 8,
  	MINES_LIMIT: 10
  },
  mutations: {
  	reveal(state, {row, col}) {
  		state.cells[row][col].revealed = true;
  	},
  	revealAdjacents(state, {row, col}) {
  		revealAll(state, {row, col})
  	},
  	revealAll(state) {
  		state.cells.map(row => {
  			row.map(cell => {
  				cell.revealed = true;
  				return cell;
  			});
  		})
  	},
  	gameOver(state) {
  		setTimeout(() => {
	  		state.gameStatus = 'over';
  		}, 300)
  	},
  	gameInProgress(state) {
		state.gameStatus = 'in progress';

  	},
  	rePopulateBoard(state) {
  		state.cells = populateBoard();
  	},
  },
  actions: {
  	revealCell({ commit, state }, { coordinates }) {
  		if (state.cells[coordinates.row][coordinates.col].mined) {
  			commit('gameOver')
  			commit('revealAll')
  		}
  		else {
	  		commit('reveal', coordinates)
	  		commit('revealAdjacents', coordinates)
  		}

  	},
  	restartGame({ commit }) {
  		commit('rePopulateBoard')
  		commit('gameInProgress')
  	}
  }
})
