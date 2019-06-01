<template>
	<div class="board">
		<div v-for="(row, i) in rows">
			<cell v-for="(cell, j) in row" :coordinates="{ row: i, col: j}"></cell>
		</div>
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
		border: 1px solid black;
		max-width: 400px;
		margin-left: auto;
	  	margin-right: auto;
	  	text-align: center;
	}
</style>