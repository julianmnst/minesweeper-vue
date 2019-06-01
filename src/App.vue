<template>
  <div id="app">
    <board :rows="$store.state.cells"></board>
  </div>
</template>

<script>
import Board from './components/Board'

export default {
  name: 'app',
  components: {
    Board
  }
}
</script>

<style>
#app {
}
</style>
