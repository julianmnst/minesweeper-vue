<template>
	<div v-bind:class="{ revealed: cell.revealed, cell: true }" @click="revealCell">
		<span v-if="flagged" class="flag">?</span>
		<div v-if="cell.mined && cell.revealed" class="mine"></div>
	</div>
</template>
<script>
export default {
	name: 'cell',
	data(){
		return {
			flagged: false,
		}
	},
	props: {
		coordinates: Object,
	},
	computed: {
		cell() {
			return this.$store.state.cells[this.coordinates.row][this.coordinates.col];
		}
	},
	methods: {
		revealCell() {
			this.$store.dispatch('revealCell', { coordinates: this.coordinates })
		}
	}
}
</script>
<style scoped>
.cell {
	width: 40px;
	height: 40px;
	background-color:#e79aead4;
	border: 1px solid white;
	margin: 1px;
	display: inline-block;
}

.revealed {
	background-color: #ad8cf3 !important;
}

.flag {
	color: white;
}
.mine {
	position: relative;
	left: 10px;
	top: 10px;
	background-color: #454578;
	display: block;
	width: 20px;
	height: 20px;
	border-radius: 50%;
}
</style>