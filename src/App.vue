<template>
  <Header :loggedIn="false"></Header>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
}
}
</script>

<style>

html, body {
    margin: 0;
    padding: 0;
    background: hsl(60, 3%, 17%, 1);
  }

#app {
  font-family: Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
