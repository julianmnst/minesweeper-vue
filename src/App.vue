<template>
  <div id="app">
    <board :rows="$store.state.cells"></board>
  </div>
</template>

<script>
import Board from './components/Board'

let cells = {

}

export default {
  name: 'app',
  components: {
    Board
  },
  data() {
    return {
      cells
    }
  }
}
</script>

<style>
#app {
}
</style>
