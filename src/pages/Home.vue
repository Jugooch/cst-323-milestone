<script>
import Header from "./components/Header.vue";

export default {
  name: "HomePage",
  components: {
    Header,
  },
};
</script>

<template>
  <Header :loggedIn="true"></Header>
</template>

<style>

</style>