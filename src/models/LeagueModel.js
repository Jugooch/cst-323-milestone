export default class League {
  constructor({ key, group, title, description, active, has_outrights }) {
      this.key = key;
      this.group = group;
      this.title = title;
      this.description = description;
      this.active = active;
      this.has_outrights = has_outrights;
  }
}

/*
const leagues = JSON.parse(jsonData).map(leagueData => new League(leagueData));
*/
