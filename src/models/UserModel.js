export default class User {
    constructor(user_id, name, password, email_address, favorite_leagues) {
      this.user_id = user_id;
      this.name = name;
      this.password = password;
      this.email_address = email_address;
      this.favorite_leagues = favorite_leagues
    }
}