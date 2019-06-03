<template>
  <div id="app">
  	<div v-bind:class="{'game-over': $store.state.gameStatus === 'over'}"
		v-bind:style="{display: $store.state.gameStatus === 'over' ? 'block':'none'}"
		@click="restartGame">
		<h1 class="title">Game {{ $store.state.gameStatus }}</h1>
		<p class="subtitle">Click on the screen to restart the game</p>
	</div>
    <board v-bind:style="{filter: $store.state.gameStatus === 'over' ? 'blur(4px)':'none'}" :rows="$store.state.cells"></board>
  </div>
</template>

<script>
import Board from './components/Board'

export default {
  name: 'app',
  components: {
    Board
  },
  methods: {
  	restartGame() {
  		this.$store.dispatch('restartGame')
  	}
  }
}
</script>

<style scoped>
.game-over {
	position: fixed; /* Sit on top of the page content */
	display: none; /* Hidden by default */
	width: 100%; /* Full width (cover the whole page) */
	height: 100%; /* Full height (cover the whole page) */
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0,0,0,0.5); /* Black background with opacity */
	z-index: 50; /* Specify a stack order in case you're using a different order for other elements */
	cursor: pointer; /* Add a pointer on hover */
	transition: all 5s;
}

.title{
  position: absolute;
  top: 30%;
  left: 50%;
  font-size: 50px;
  color: white;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  text-shadow: 2px 2px black;
}

.subtitle{
  position: absolute;
  top: 40%;
  left: 50%;
  color: white;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  text-shadow: 2px 2px black;
}
</style>
