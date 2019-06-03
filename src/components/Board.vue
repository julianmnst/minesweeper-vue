<template>
	<div class="board" >
			<div v-for="(row, i) in rows">
				<cell v-for="(cell, j) in row" :coordinates="{ row: i, col: j}"></cell>
			</div>
		<h1>Game {{ $store.state.gameStatus }}</h1>
		<p v-if="$store.state.gameStatus !== 'over'">Click on a cell to play</p>
	</div>
</template>

<script>
import Cell from './Cell'

export default {
	name: 'board',
	components: {
		cell: Cell
	},
	props: {
		rows: Array,
	}
}
</script>

<style scoped>
.board {
	padding: 20px;
	margin-top: 30px;
	border: 1px solid #afafaf;
	border-radius: 2px;
	max-width: 80%;
	margin-left: auto;
  	margin-right: auto;
  	text-align: center;
  	box-shadow: 3px 3px 5px #00000073;
}
</style>