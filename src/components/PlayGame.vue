<template>
  <div class="container">
    <h2>Play Game</h2>
    <p>Messages: {{ this.$store.state.message }}</p>
    <Tiles />
    <div class="btn-group">
      <button @click="leaveRoom()">Leave Room</button>
      <button @click="leaveSeat()">Leave Seat</button>
      <button @click="restartGame()">Restart Game</button>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
import { mapState } from 'vuex';
import Tiles from './Tiles';

export default {
  name: 'PlayGame',

  components: {
    Tiles
  },

  data () {
    return {
      playerId: this.$store.state.player.id,
      playerSeat: this.$store.state.boards.players,
      socket: io.connect('http://178.128.206.150:7000/?id=' + this.playerId)
    };
  },

  computed: {
    ...mapState(['board', 'boards', 'boardStatus', 'message'])
  },

  methods: {
    leaveRoom () {
      this.socket.emit(
        'leave_room',
        this.board.id,
        responseCode => {
          console.log(`Leave Room Ack: ${responseCode}`);
          this.setBoard({}); // set board to be empty
        }
      );

      this.socket.on('left', res => {
        this.socket.emit(
          this.setMessage(`${res.player.name} leave the room.`)
          // setTimeout(() => {
          //   this.message = '';
          // }, 5000)
        );
      });

      this.$router.push('boards');
    },

    leaveSeat () {
      let seat = null;

      this.boards.forEach(element => {
        if (this.board.id === element.id) seat = element.players;
      });

      this.socket.emit(
        'leave_seat',
        this.board.id,
        seat,
        responseCode => {
          console.log(`Leave Seat Ack: ${responseCode}`);
        }
      );

      this.socket.on('seat_left', res => {
        this.socket.emit(
          this.setMessage(`${res.player.name} left the seat.`),
          console.log('Socket emit message')
        );
      });
    },

    restartGame () {
      this.setBoardStatus('{ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 }');
      console.log('Game restarted');

      this.socket.on('restarted', res => {
        console.log(`${res} game restarted`); // doesn't get any response
      });
    }
  },

  mounted () {
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
