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
    <div>{{ this.$store.state.player }}</div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'CreatePlayer',

  data () {
    return {
      name: ''
    };
  },

  computed: {
    ...mapState(['player'])
  },

  methods: {
    ...mapActions(['setPlayer']),
    newPlayer () {
      axios
        .post(`${this.server}/player`, {
          name: this.name,
          apikey: this.apiKey
        })
        .then(response => {
          this.setPlayer(response.data);
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
