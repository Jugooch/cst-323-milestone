<template>
    <div class="card">
      <div class="card-header"></div>
      <div class="card-body">
        <div class="team">
          <h3 class="game-odds">{{ game.bookmakers[0]?.markets[0]?.outcomes[0]?.price }}</h3>
          <h3 class="team-name">{{ game.home_team }}</h3>
        </div>
        <div><h2>VS</h2></div>
        <div class="team">
          <h3 class="game-odds">{{ game.bookmakers[0]?.markets[0]?.outcomes[1]?.price }}</h3>
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

.card{
  border: 2px solid #20fc8f;
  border-radius: 30px;
  width: 30%;
      margin-bottom: 0px;
}

h3{
    font-family: "Integral CF", sans-serif;
    font-family: "Inter", sans-serif;
    color: white;
    font-size: 20px;  
    text-wrap: wrap;
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

.card-body>div{
  text-align: center;
  padding: 16px;
}

.team{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
}

@media only screen and (max-width: 950px) {
    .card{
      width: 100%;
      margin-bottom: 16px;
    }
  }

</style>
  