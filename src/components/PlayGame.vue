<template>
  <div class="container">
    <h2>Play Game</h2>
    <p>Messages: {{ message }}</p>
    <div class="board-wrapper">
      <div class="game-board">
        <div class="box">130px x 130px</div>
        <div class="box">130px x 130px</div>
        <div class="box">130px x 130px</div>
        <div class="box">130px x 130px</div>
        <div class="box">130px x 130px</div>
        <div class="box">130px x 130px</div>
        <div class="box">130px x 130px</div>
        <div class="box">130px x 130px</div>
        <div class="box">130px x 130px</div>
      </div>
    </div>
    <div class="btn-group">
      <button @click="leaveRoom()">Leave Room</button>
      <button @click="leaveSeat()">Leave Seat</button>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
import { mapState } from 'vuex';

export default {
  name: 'PlayGame',

  data () {
    return {
      playerId: this.$store.state.player.id,
      message: ''
    };
  },

  computed: {
    ...mapState(['board'])
  },

  methods: {
    leaveRoom () {
      const socket = io.connect('http://178.128.206.150:7000/?id=' + this.playerId);

      socket.emit(
        'leave_room', // doesn't return response code
        this.board.id,
        // this.board.id = {},
        // this.boards.forEach(element => {
        //   if (element.id === this.board.id && element.players > 0) {
        //     element.players--;
        //   }
        // }),
        console.log('Leave room'),
        responseCode => {
          console.log(`Ack: ${responseCode}`);
        },
        this.setBoard({})
      );

      socket.on('left', res => {
        socket.emit(
          this.message = (`${res.player.name} leave the room.`),
          setTimeout(() => {
            this.message = '';
          }, 5000)
        );
      });

      this.$router.push('boards');
    },

    leaveSeat () {
      const socket = io.connect('http://178.128.206.150:7000/?id=' + this.playerId);

      socket.emit(
        'leave_seat', // doesn't return response code
        this.board.id,
        // this.boards.forEach(element => {
        //   if (element.id === this.board.id && element.players === 1) {
        //     element.players = 0;
        //   }
        // }),
        responseCode => {
          console.log(`Ack: ${responseCode}`);
        });
      console.log('Seat left');

      socket.on('left', res => {
        socket.emit(
          this.message = (`${res.player.name} left the seat.`),
          console.log('Socket emit message')
        );
      });
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.board-wrapper {
  display: flex;
  /* justify-content: center; */
}

.game-board {
    display: grid;
    grid-template-rows: 130px 130px 130px;
    grid-template-columns: 130px 130px 130px;
}

.box {
  background-color: #dddddd;
  border: 1px solid #b9b9b9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8b8b8b;
}
</style>
