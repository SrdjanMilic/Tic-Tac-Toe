<template>
  <div class="container">
    <h2>Boards</h2>
    <p>Messages: {{ this.$store.state.message }}</p>
    <p>Click on board to select it, then click "Join Room" to play the game.</p>
    <div class="boards-wrapper">
      <div class="boards" v-for="board in boards" :key="board.index" @click="setBoardState(board.id)">
      </div>
    </div>
    <div class="btn-group">
      <button class="btn" @click="joinRoom">Join Room</button>
      <button class="btn" @click="createBoard">Create New</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import io from 'socket.io-client';
import { mapState } from 'vuex';

export default {
  name: 'ListBoards',

  data () {
    return {
      playerId: this.$store.state.player.id
    };
  },

  computed: {
    ...mapState(['board', 'boards', 'message'])
  },

  methods: {
    showBoards () {
      axios
        .post(`${this.server}/boards`, {
          apikey: this.apiKey
        })
        .then(response => {
          this.getBoards(response.data);
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },

    createBoard () {
      axios
        .post(`${this.server}/create_board`, {
          apikey: this.apiKey
        })
        .then(response => {
          this.setBoard(response.data);
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        });

      this.showBoards();
    },

    setBoardState (id) {
      const boardId = { id: id };
      this.setBoard(boardId);
    },

    joinRoom () {
      const socket = io.connect('http://178.128.206.150:7000/?id=' + this.playerId);

      socket.emit(
        'join_room',
        this.board.id,
        responseCode => {
          console.log(`Join Room Ack: ${responseCode}`);
        });

      socket.on('joined', res => {
        socket.emit(
          this.setMessage(`${res.player.name} has join the room.`) // this emit is working
          // setTimeout(() => {
          //   this.message = '';
          // }, 5000)
        );
      });

      this.board.id ? this.$router.push('/game') : alert('Please select board first');
    }
  },

  mounted () {
    this.showBoards();
  }
};

</script>

<style scoped>
.boards-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  width: 100%;
  margin-top: 10px;
}

.boards {
  width: 50px;
  height: 50px;
  background-color: rgb(33, 115, 223);
  cursor: pointer;
}
</style>
