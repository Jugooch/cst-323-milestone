<script>
import HeaderSection from '@/components/HeaderSection.vue';
import SearchButton from '@/components/SearchButton.vue';
import OddsService from '@/services/OddsService'
import GameCard from '@/components/GameCard.vue';

export default {
  name: 'HomePage',
  components: {
    HeaderSection,
    SearchButton,
    GameCard
  },
  data() {
    return {
      leagues: [],
      upcomingGames: [],
      recentScores: []
    };
  },
  methods: {
    async fetchLeagues() {
      try {
        const oddsService = new OddsService();
        this.leagues = await oddsService.getLeagues();
      } catch (error) {
        console.error('Error fetching leagues:', error);
      }
    },
    async fetchUpcoming() {
      try {
        const oddsService = new OddsService();
        this.upcomingGames = await oddsService.getUpcomingGames("americanfootball_nfl");
      } catch (error) {
        console.error('Error fetching leagues:', error);
      }
    },
    async fetchRecentScores() {
      try {
        const oddsService = new OddsService();
        this.recentScores = await oddsService.getRecentScores("americanfootball_nfl");
      } catch (error) {
        console.error('Error fetching leagues:', error);
      }
    },
  },
  mounted() {
    this.fetchLeagues();
    this.fetchUpcoming();
    this.fetchRecentScores();
  },
};
</script>

<template>
  <HeaderSection :loggedIn="false"></HeaderSection>
  <div id="body">
  <div class="upcoming-games">
    <div class="title-row">
      <h1>UPCOMING GAMES</h1>

      <button class="text-button" id="upcoming-games-btn">See All...</button>
    </div>
    <div class="games-row" v-if="upcomingGames.length > 0">    
      <GameCard :game="upcomingGames[0]"></GameCard>
      <GameCard v-if="upcomingGames.length > 1" :game="upcomingGames[1]"></GameCard>
      <div v-else style="width: 30%;"></div>
      <GameCard v-if="upcomingGames.length > 2" :game="upcomingGames[2]"></GameCard>
      <div v-else style="width: 30%;"></div>
    </div>
    <div v-else><h3>No upcoming games...</h3></div>
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
.games-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0px;
}

.upcoming-games, .leagues, .recent-games{
  margin-bottom: 32px;
}

#body{
  padding: 60px;
}

.text-button{
  background-color: transparent;
  border: none;
  color: #20fc8f;
  font-size: 20px;
}

.title-row{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 16px;
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

  .games-row {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 16px;
  }
}

</style>
