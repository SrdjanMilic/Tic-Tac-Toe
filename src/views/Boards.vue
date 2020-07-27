<template>
  <div class="boards">
    <ListBoards />
  </div>
</template>

<script>
// @ is an alias to /src
import ListBoards from '@/components/ListBoards.vue';
// import { mapActions, mapState } from 'vuex';
// import axios from 'axios';

export default {
  name: 'Home',

  components: {
    ListBoards
  }

  // computed: {
  //   ...mapState(['apiKey', 'server'])
  // },

  // // create apikey for every new user if doesn't have one
  // created () {
  //   if (!this.apiKey) {
  //     axios({
  //       method: 'POST',
  //       url: `${this.server}/register_candidate`
  //     }).then(response => {
  //       this.setApiKey(response.data.apikey);
  //     });
  //   }
  //   window.app = this;
  // },

  // methods: {
  //   ...mapActions(['setApiKey'])
  // },
};
</script>

<style scoped>
</style>
