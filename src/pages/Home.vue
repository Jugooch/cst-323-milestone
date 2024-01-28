<script>
import HeaderSection from '../components/HeaderSection.vue';
import SearchButton from '../components/SearchButton.vue';

export default {
  name: 'HomePage',
  components: {
    HeaderSection,
    SearchButton
  }
}
</script>

<template>
  <HeaderSection :loggedIn="false"></HeaderSection>
  <div id="body">
  <div class="upcoming-games">
    <div class="title-row">
      <h1>UPCOMING GAMES</h1>
      <button class="text-button" id="upcoming-games-btn">See All...</button>
    </div>
    <div class="games-row"></div>
  </div>
  <div class="leagues">
    <div class="title-row">
      <h1>SPORTS LEAGUES</h1>
      <SearchButton></SearchButton>
    </div>
    <div class="leagues-pills"></div>
  </div>
  <div class="recent-scores">
    <div class="title-row">
      <h1>RECENT GAME SCORES</h1>
      <button class="text-button" id="upcoming-games-btn">See More...</button>
    </div>
    <div class="games-row"></div>
  </div>
  </div>
</template>

<style>
#body{
  padding: 60px;
}

.text-button{
  background-color: transparent;
  border: none;
  color: #20fc8f;
  font-size: 24px;
}

.title-row{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

h1{
  color: white;
  font-size: 40px;
  font-weight: bold;
  font-family: "Integral CF", sans-serif;
}

@media only screen and (max-width: 762px) {
  h1{
    font-size: 24px;
  }

  .text-button{
    background-color: transparent;
    border: none;
    color: #20fc8f;
    font-size: 16px;
  }
}

</style>
