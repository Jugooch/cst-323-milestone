<template>
    <div v-if="game">
      <div class="card-header"></div>
      <div class="card-body">
        <div class="team">
          <h3 class="game-odds">{{ game.bookmakers[0]?.markets[0]?.outcomes[0]?.points }}</h3>
          <h3 class="team-name">{{ game.home_team }}</h3>
        </div>
        <div><h2>VS</h2></div>
        <div class="team">
          <h3 class="game-odds">{{ game.bookmakers[0]?.markets[0]?.outcomes[1]?.points }}</h3>
          <h3 class="team-name">{{ game.away_team }}</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Game from '@/models/GameModel';
  
  export default {
    name: "GameCard",
    props: {
      game: {
        type: Game,
        required: true,
      },
    },
  };
  </script>
  
<style scoped>

h3{
    font-family: "Integral CF", sans-serif;
    font-family: "Inter", sans-serif;
    color: white;
    font-size: 24px;  
}

.game-odds{
    font-family: "Integral CF", sans-serif;
    font-weight: bold;
}

.team-name{
    font-family: "Inter", sans-serif;
    font-weight: normal;
}

.card-body{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.team{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>
  