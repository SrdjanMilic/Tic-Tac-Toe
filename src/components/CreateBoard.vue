<template>
  <div class="container">
    <h1>Create Board</h1>
    <button class="btn" @click="createBoard()">Create Board</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreateBoards',

  methods: {
    createBoard () {
      axios
        .post(`${this.server}/create_board`, {
          apikey: this.apiKey
        })
        .then(response => {
          this.setBoard(response.data);
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
</style>
