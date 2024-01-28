export class Outcome {
    constructor({ label, name, price, points }) {
        this.name = label || name;
        this.price = price;
        this.points = points;
    }
}

export class Market {
    constructor({ key, outcomes, last_update }) {
        this.key = key;
        this.outcomes = outcomes.map(outcome => new Outcome(outcome));
        this.last_update = last_update;
    }
}

export class Bookmaker {
    constructor({ key, title, last_update, markets }) {
        this.key = key;
        this.title = title;
        this.last_update = last_update;
        this.markets = markets.map(market => new Market(market));
    }
}

export default class Game {
    constructor({ id, sport_key, sport_title, commence_time, home_team, away_team, bookmakers }) {
        this.id = id;
        this.sport_key = sport_key;
        this.sport_title = sport_title;
        this.commence_time = commence_time;
        this.home_team = home_team;
        this.away_team = away_team;
        this.bookmakers = bookmakers.map(bookmaker => new Bookmaker(bookmaker));
    }
}

/*
const games = JSON.parse(jsonData).map(gameData => new Game(gameData));
*/
