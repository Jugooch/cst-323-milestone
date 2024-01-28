import Game from '../models/GameModel';
import League from '../models/LeagueModel';

export default class OddsService {
    constructor() {
        this.apiKey = 'b323592a63msh4bccc1bd574d275p188957jsn2812f79525dc';
        this.apiHost = 'odds.p.rapidapi.com';
    }

    async getLeagues() {
        const url = 'https://odds.p.rapidapi.com/v4/sports?all=true';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': this.apiKey,
                'X-RapidAPI-Host': this.apiHost
            }
        };

        try {
            const response = await fetch(url, options);
            const leaguesData = await response.json();
            return leaguesData.map(leagueData => new League(leagueData));
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async getUpcomingGames(leagueKey) {
        const url = `https://odds.p.rapidapi.com/v4/sports/${leagueKey}/odds?regions=us&oddsFormat=decimal&markets=h2h%2Cspreads&dateFormat=iso`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': this.apiKey,
                'X-RapidAPI-Host': this.apiHost
            }
        };

        try {
            const response = await fetch(url, options);
            const gamesData = await response.json();
            return gamesData.map(gameData => new Game(gameData));
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async getRecentScores(leagueKey) {
        const url = `https://odds.p.rapidapi.com/v4/sports/${leagueKey}/scores?daysFrom=3`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': this.apiKey,
                'X-RapidAPI-Host': this.apiHost
            }
        };

        try {
            const response = await fetch(url, options);
            const gamesData = await response.json();
            return gamesData.map(gameData => new Game(gameData));
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}