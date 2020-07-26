import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['server', 'apiKey', 'boards', 'player', 'board'])
  },
  methods: {
    ...mapActions(['setApiKey', 'setBoard', 'setPlayer'])
  }
};
