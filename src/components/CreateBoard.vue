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
  data () {
    return {
      apikey: 'bc71bc64-0698-4512-aa4e-33196cc6a3cf'
    };
  },

  methods: {
    createBoard () {
      axios
        .post('http://178.128.206.150:7000/create_board', {
          apikey: this.apikey
        })
        .then(response => {
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
