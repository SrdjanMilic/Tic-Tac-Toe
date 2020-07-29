<template>
    <div class="board-wrapper">
      <div class="game-board">
        <div id="box-0" class="box" @click="markedTile0"></div>
        <div id="box-1" class="box" @click="markedTile1"></div>
        <div id="box-2" class="box" @click="markedTile2"></div>
        <div id="box-3" class="box" @click="markedTile3"></div>
        <div id="box-4" class="box" @click="markedTile4"></div>
        <div id="box-5" class="box" @click="markedTile5"></div>
        <div id="box-6" class="box" @click="markedTile6"></div>
        <div id="box-7" class="box" @click="markedTile7"></div>
        <div id="box-8" class="box" @click="markedTile8"></div>
      </div>
    </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  name: 'Tiles',

  data () {
    return {
      playerId: this.$store.state.player.id,
      socket: io.connect('http://178.128.206.150:7000/?id=' + this.playerId),
      x: 'X',
      o: 'O'
    };
  },

  methods: {
    markedTile0 () {
      const box0 = document.getElementById('box-0');
      if (box0) box0.innerText = this.x;
      this.socket.on('marked', res => {
        this.socket.emit(
          console.log(res) // doesn't get any response
        );
      });
    },

    markedTile1 () {
      const box1 = document.getElementById('box-1');
      if (box1) box1.innerText = this.x;
    },

    markedTile2 () {
      const box2 = document.getElementById('box-2');
      if (box2) box2.innerText = this.x;
    },

    markedTile3 () {
      const box3 = document.getElementById('box-3');
      if (box3) box3.innerText = this.x;
    },

    markedTile4 () {
      const box4 = document.getElementById('box-4');
      if (box4) box4.innerText = this.x;
    },

    markedTile5 () {
      const box5 = document.getElementById('box-5');
      if (box5) box5.innerText = this.x;
    },

    markedTile6 () {
      const box6 = document.getElementById('box-6');
      if (box6) box6.innerText = this.x;
    },

    markedTile7 () {
      const box7 = document.getElementById('box-7');
      if (box7) box7.innerText = this.x;
    },

    markedTile8 () {
      const box8 = document.getElementById('box-8');
      if (box8) box8.innerText = this.x;
    }
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

.box {
  background-color: #dddddd;
  border: 1px solid #b9b9b9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8b8b8b;
  font-size: 100px;
}

.box:hover {
  cursor: pointer;
}
</style>
