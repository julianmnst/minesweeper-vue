<template>
	<div class="board">
		<cell :mined="false" :flagged="false"></cell>
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
		rows: Number,
		cols: Number
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