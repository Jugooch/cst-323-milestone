export default class GameScores {
    constructor(data) {
      this.id = data.id;
      this.sport_key = data.sport_key;
      this.sport_title = data.sport_title;
      this.commence_time = data.commence_time;
      this.completed = data.completed;
      this.home_team = data.home_team;
      this.away_team = data.away_team;
      this.scores = data.scores;
      this.last_update = data.last_update;
    }
  }