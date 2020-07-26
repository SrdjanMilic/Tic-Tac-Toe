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
    apiKey: null,
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
    SET_USER (state, player) {
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
    setPlayer (context, player) {
      context.commit('SET_USER', player);
    }
  }
});

export default store;
