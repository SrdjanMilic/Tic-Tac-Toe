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
    board: {},
    boardStatus: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 },
    message: ''
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
    },
    SET_BOARD_STATUS (state, boardStatus) {
      state.boardStatus = boardStatus;
      // if (!boardStatus) return;
      // const obj = JSON.parse(boardStatus);
      // for (const [key, value] of Object.entries(obj)) {
      //   Vue.set(state.boardStatus, key, value);
      // }
    },
    SET_MESSAGE (state, message) {
      state.message = message;
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
    },
    setBoardStatus (context, boardStatus) {
      context.commit('SET_BOARD_STATUS', boardStatus);
    },
    setMessage (context, message) {
      context.commit('SET_MESSAGE', message);
    }
  }
});

export default store;
