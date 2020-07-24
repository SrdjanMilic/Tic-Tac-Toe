<template>
  <div class="container">
    <h1>Create Player</h1>
    <form @submit.prevent="newPlayer" method="post">
      <label for="name">Enter Name</label>
      <br>
      <input type="text" class="form-control" v-model="name" id="name" required name="name" />
      <br>
      <input type="submit" value='Register' />
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreatePlayer',
  data () {
    return {
      apikey: 'bc71bc64-0698-4512-aa4e-33196cc6a3cf',
      name: ''
    };
  },
  methods: {
    newPlayer () {
      axios
        .post('http://178.128.206.150:7000/player', {
          name: this.name,
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

input[type=submit] {
  margin-top: 5px;
}

</style>
