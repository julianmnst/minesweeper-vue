<template>
	<div class="cell">
		<span v-if="flagged" class="flag">?</span>
		<span v-if="mined" class="mine">O</span>
	</div>
</template>
<script>
export default {
	name: 'cell',
	props: {
		flagged: Boolean,
		mined: Boolean,
	}
}
</script>
<style scoped>
.cell {
	width: 20px;
	height: 20px;
	background-color:#ab45af;
	border: 1px solid white;
	margin: 1px;
}
.flag {
	color: white;
}
.mine {
	color: white;
}
</style>