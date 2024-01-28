<template>
  <div id="app">
    <!-- The router-view component renders the component for the current route -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

h1{
  color: white;
  font-size: 64px;
  font-weight: bold;
  font-family: "Integral CF", sans-serif;
  margin: 0;
}

h2 {
    font-family: "Integral CF", sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #20fc8f;
  }

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
