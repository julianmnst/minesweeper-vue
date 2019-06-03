<template>
	<div v-bind:class="{ revealed: cell.revealed, cell: true }"
		@click="revealCell"
		@contextmenu.prevent="toggleFlag">
		<div v-if="flagged" class="flag">?</div>
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
		},
		toggleFlag() {
			this.flagged = !this.flagged
		}
	}
}
</script>
<style scoped>
.cell {
	width: 40px;
	height: 40px;
	background-color:#e79aead4;
	margin: 3px;
	display: inline-block;
	transition: all .3s;
	box-shadow: 1px 1px 3px #00000099;
}

.revealed {
	background-color: #ad8cf3 !important;
	box-shadow: 0 0 0, inset 1px 1px 3px #00000073;
}

.flag {
	color: white;
	position: absolute;
	font-size: 2em;
	margin-left: 15px;
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