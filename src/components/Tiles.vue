<template>
    <div class="board-wrapper">
      <div class="game-board">
        <div id="tile-0" class="tile" @click="markedTile0"></div>
        <div id="tile-1" class="tile" @click="markedTile1"></div>
        <div id="tile-2" class="tile" @click="markedTile2"></div>
        <div id="tile-3" class="tile" @click="markedTile3"></div>
        <div id="tile-4" class="tile" @click="markedTile4"></div>
        <div id="tile-5" class="tile" @click="markedTile5"></div>
        <div id="tile-6" class="tile" @click="markedTile6"></div>
        <div id="tile-7" class="tile" @click="markedTile7"></div>
        <div id="tile-8" class="tile" @click="markedTile8"></div>
      </div>
    </div>
</template>

<script>
import io from 'socket.io-client';
import { mapState } from 'vuex';

export default {
  name: 'Tiles',

  data () {
    return {
      playerId: this.$store.state.player.id,
      socket: io.connect('http://178.128.206.150:7000/?id=' + this.playerId),
      player1: null,
      player2: null,
      x: 'X',
      o: 'O'
    };
  },

  computed: {
    ...mapState(['board', 'boards'])
  },

  methods: {
    markedTile0 () {
      const tile0 = document.getElementById('tile-0');
      if (tile0 && this.player1) tile0.innerText = this.x;
      if (tile0 && this.player2) tile0.innerText = this.o;

      this.socket.on('marked', res => {
        this.socket.emit(
          console.log(res) // doesn't get any response
        );
      });
    },

    markedTile1 () {
      const tile1 = document.getElementById('tile-1');
      if (tile1 && this.player1) tile1.innerText = this.x;
      if (tile1 && this.player2) tile1.innerText = this.o;
    },

    markedTile2 () {
      const tile2 = document.getElementById('tile-2');
      if (tile2 && this.player1) tile2.innerText = this.x;
      if (tile2 && this.player2) tile2.innerText = this.o;
    },

    markedTile3 () {
      const tile3 = document.getElementById('tile-3');
      if (tile3 && this.player1) tile3.innerText = this.x;
      if (tile3 && this.player2) tile3.innerText = this.o;
    },

    markedTile4 () {
      const tile4 = document.getElementById('tile-4');
      if (tile4 && this.player1) tile4.innerText = this.x;
      if (tile4 && this.player2) tile4.innerText = this.o;
    },

    markedTile5 () {
      const tile5 = document.getElementById('tile-5');
      if (tile5 && this.player1) tile5.innerText = this.x;
      if (tile5 && this.player2) tile5.innerText = this.o;
    },

    markedTile6 () {
      const tile6 = document.getElementById('tile-6');
      if (tile6 && this.player1) tile6.innerText = this.x;
      if (tile6 && this.player2) tile6.innerText = this.o;
    },

    markedTile7 () {
      const tile7 = document.getElementById('tile-7');
      if (tile7 && this.player1) tile7.innerText = this.x;
      if (tile7 && this.player2) tile7.innerText = this.o;
    },

    markedTile8 () {
      const tile8 = document.getElementById('tile-8');
      if (tile8 && this.player1) tile8.innerText = this.x;
      if (tile8 && this.player2) tile8.innerText = this.o;
    }
  },

  mounted () {
    this.boards.forEach(element => {
      if (element.id === this.board.id && element.players === 1) this.player1 = 1;
      if (element.id === this.board.id && element.players === 2) this.player2 = 2;
    });
  }
};
</script>

<style scoped>
.board-wrapper {
  display: flex;
}

.game-board {
    display: grid;
    grid-template-rows: 130px 130px 130px;
    grid-template-columns: 130px 130px 130px;
}

.tile {
  background-color: #dddddd;
  border: 1px solid #b9b9b9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8b8b8b;
  font-size: 100px;
}

.tile:hover {
  cursor: pointer;
}
</style>
