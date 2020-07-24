<template>
  <div class="container">
    <h1>List Boards</h1>
    <button class="btn" @click="showBoards()">Show Boards</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ListBoards',
  data () {
    return {
      apikey: 'bc71bc64-0698-4512-aa4e-33196cc6a3cf'
    };
  },

  methods: {
    showBoards () {
      axios
        .post('http://178.128.206.150:7000/boards', {
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
