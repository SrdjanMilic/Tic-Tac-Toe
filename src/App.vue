<template>
  <div id="app">
    <nav>
      <router-link to="/"><span>Tic Tac Toe</span></router-link>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="boards">Boards</router-link>
        <router-link to="game">Game</router-link>
      </div>
    </nav>
    <div class="info-box">
      <div>Api Key: {{ $store.state.apiKey }}</div>
      <div>Player: {{ $store.state.player }}</div>
      <div>Board: {{ this.$store.state.board }}</div>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
}

.container,
nav,
.info-box {
  padding: 0 8px;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  color: #2c3e50;
}

.btn-group {
  margin-top: 20px;
}

button {
  padding: 6px 12px;
  background-color: #fff;
  border: 1px solid #c2c2c2;
  cursor: pointer;
}

button {
  margin-right: 10px;
}

button:last-of-type {
  margin: 0;
}

button:hover {
  background-color: #f5f5f5;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  background-color: #242424;
  margin-bottom: 20px;
}

nav span {
  text-decoration: none;
  font-weight: 900;
  font-size: 2em;
}

nav a {
  text-decoration: none;
  color: #fff;
}

.nav-links a {
  margin-right: 10px;
}

.nav-links a:last-of-type {
  margin-right: 0;
}
</style>
