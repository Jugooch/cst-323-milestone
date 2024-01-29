<script>
import HeaderSection from '@/components/HeaderSection.vue';
import SearchButton from '@/components/SearchButton.vue';
import LeaguePill from '@/components/LeaguePill.vue'
import OddsService from '@/services/OddsService'
import GameCard from '@/components/GameCard.vue';
import GameScoreCard from '@/components/GameScoreCard.vue';

export default {
  name: 'HomePage',
  components: {
    HeaderSection,
    SearchButton,
    GameCard,
    LeaguePill,
    GameScoreCard
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
      <div class="title-buttons">
        <SearchButton></SearchButton>
        <button class="text-button">See All...</button>
      </div>
    </div>
    <div v-if="leagues.length>0" class="leagues-pills">
      <div class="games-row">
        <LeaguePill :league="leagues[0]"></LeaguePill>
        <LeaguePill :league="leagues[1]"></LeaguePill>
        <LeaguePill :league="leagues[2]"></LeaguePill>
      </div>
      <div class="games-row">
        <LeaguePill :league="leagues[3]"></LeaguePill>
        <LeaguePill :league="leagues[4]"></LeaguePill>
        <LeaguePill :league="leagues[5]"></LeaguePill>
      </div>
    </div>
    <div v-else><h3>No leagues found...</h3></div>
  </div>
  <div class="recent-scores">
    <div class="title-row">
      <h1>RECENT GAME SCORES</h1>
      <button class="text-button" id="upcoming-games-btn">See More...</button>
    </div>    
    <div v-if="recentScores.length>0" class="games-row">
      <GameScoreCard :game="recentScores[0]"></GameScoreCard>
      <GameScoreCard v-if="recentScores.length > 1" :game="recentScores[1]"></GameScoreCard>
      <div v-else style="width: 30%;"></div>
      <GameScoreCard v-if="recentScores.length > 2" :game="recentScores[2]"></GameScoreCard>
      <div v-else style="width: 30%;"></div>
    </div>
    <div v-else><h3>No scores found...</h3></div>
  </div>
  </div>
</template>

<style>
.title-buttons{
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.games-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.upcoming-games, .leagues, .recent-games{
  margin-bottom: 80px;
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

h1{
  color: white;
  font-size: 40px;
  font-weight: bold;
  font-family: "Integral CF", sans-serif;
}

.title-row{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 16px;
  }

  .title-row>h1{
    margin-bottom: 0;
  }



@media only screen and (max-width: 950px) {  
  


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
  }

  .title-row{
    flex-direction: column;
    align-items: start;
  }

  .title-row>h1{
    margin-bottom: 16px;
  }
}

</style>
