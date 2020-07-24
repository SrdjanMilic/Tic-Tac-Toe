<template>
  <div class="game">
    <PlayGame />
  </div>
</template>

<script>
// @ is an alias to /src
import PlayGame from '@/components/PlayGame.vue';

export default {
  name: 'Home',
  components: {
    PlayGame
  }
};
</script>

<style scoped>

</style>
