import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['server', 'apiKey', 'boards', 'board', 'player'])
  },
  methods: {
    ...mapActions(['setApiKey', 'getBoards', 'setBoard', 'setPlayer'])
  }
};
