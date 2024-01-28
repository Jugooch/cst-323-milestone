import Game from '../models/GameModel';
import League from '../models/LeagueModel';
import GameScores from '@/models/GameScoresModel';
import leaguesData from '@/assets/mock-data/leagues.json';
import gameOddsData from '@/assets/mock-data/gameodds.json';
import gameScoresData from '@/assets/mock-data/gamescores.json';

export default class OddsService {

    ///////////////////////////////////////////////////////////////////////////
    //This is all commented out to save api quota usage when developing. 
    //Mock data will be used for most of this process.
    ///////////////////////////////////////////////////////////////////////////
    /*
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
            return gamesData.map(gameData => new GameScores(gameData));
        } catch (error) {
            console.error(error);
            return [];
        }
    }
    */

    async getLeagues() {

        try {
            return leaguesData.map(leagueData => new League(leagueData));
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async getUpcomingGames() {
        try {
            return gameOddsData.map(gameData => new Game(gameData));
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async getRecentScores() {
        try {
            return gameScoresData.map(gameData => new GameScores(gameData));
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}