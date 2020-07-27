import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersistedState({
    storage: localStorage
  })],

  state: {
    server: 'http://178.128.206.150:7000',
    apiKey: 'e6266ac3-8a38-4f06-a49d-6a189e84648c', // set to null for dynamic creation
    player: [{ id: null, name: null }],
    boards: [],
    board: {}
  },

  mutations: {
    SET_API_KEY (state, apiKey) {
      state.apiKey = apiKey;
    },
    SET_BOARD (state, board) {
      state.board = board;
    },
    GET_BOARDS (state, boards) {
      state.boards = boards;
    },
    SET_PLAYER (state, player) {
      state.player = player;
    }
  },

  actions: {
    setApiKey (context, apiKey) {
      context.commit('SET_API_KEY', apiKey);
    },
    setBoard (context, board) {
      context.commit('SET_BOARD', board);
    },
    getBoards (context, boards) {
      context.commit('GET_BOARDS', boards);
    },
    setPlayer (context, player) {
      context.commit('SET_PLAYER', player);
    }
  }
});

export default store;
