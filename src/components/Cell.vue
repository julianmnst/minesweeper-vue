<template>
	<div class="cell">
		<span v-if="flagged" class="flag">?</span>
		<div v-if="cell.mined" class="mine"></div>
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