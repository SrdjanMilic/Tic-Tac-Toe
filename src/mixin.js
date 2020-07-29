import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['server', 'apiKey', 'boards', 'board', 'player', 'boardStatus', 'message'])
  },
  methods: {
    ...mapActions(['setApiKey', 'getBoards', 'setBoard', 'setPlayer', 'setBoardStatus', 'setMessage'])
  }
};
