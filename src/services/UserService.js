import User from "../models/UserModel"

export default class UserService {
  constructor() {
    this.apiBaseUrl = "https://oddspot.azurewebsites.net";
    this.headers = {
      'Content-Type': 'application/json',
      // Include other headers like Authorization if needed
    };
  }

  // Map API response to User model instances
  mapToUserModel(data) {
    return data.map(user => new User(user.user_id, user.name, user.password, user.email_address, user.favorite_leagues));
  }

  // Get all users
  async getUsers() {
    const response = await fetch(`${this.apiBaseUrl}/`, {
      method: 'GET',
      headers: this.headers,
    });
    const data = await response.json(); // Await the resolution of the Promise to get the JSON data
    return this.mapToUserModel(data); // Make sure this data is an array
  }


  // Get a single user by ID
  async getUser(id) {
    const response = await fetch(`${this.apiBaseUrl}/${id}`, {
      method: 'GET',
      headers: this.headers,
    });
    const userJson = await response.json(); // Get the user data as JSON
    // Directly return a new User instance without using map
    return new User(userJson.user_id, userJson.name, userJson.password, userJson.email_address, userJson.favorite_leagues);
  }

  async loginUser(email, password) {
    const users = await this.getUsers();

    const user = users.find(user => user.email_address === email && user.password === password);

    if (user) {
      console.log("Login successful...");
      return user;
    } else {
      console.log("Login failed...");
      
      return null;
    }
  }

  // Create a new user
  async postUser(user) {
    const response = await fetch(`${this.apiBaseUrl}/`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(user),
    });
    return response.json();
  }

  async sendCode(email) {
      const response = await fetch(`${this.apiBaseUrl}/verify`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({ email }),
      });
    
      if (!response.ok) {
        throw new Error('Failed to send verification code.');
      }
    
      return response.ok;
    }

    async verifyCode(email) {
      const response = await fetch(`${this.apiBaseUrl}/verify?email=${encodeURIComponent(email)}`, {
        method: 'GET',
        headers: this.headers,
      });
    
      if (!response.ok) {
        // Handle non-OK responses, such as 404 NotFound
        const errorText = await response.text();
        throw new Error(`Failed to verify code: ${errorText}`);
      }
    
      const code = await response.text();
      return code;
    }
    

  // Update an existing user
  async putUser(id, updatedUser) {
    const response = await fetch(`${this.apiBaseUrl}/${id}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(updatedUser),
    });
    return response.ok;
  }

  // Delete a user
  async deleteUser(id) {
    const response = await fetch(`${this.apiBaseUrl}/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    });
    return response.ok;
  }

  // Update favorite leagues for a user
  async updateFavoriteLeagues(id, favoriteLeagues) {
    const response = await fetch(`${this.apiBaseUrl}/${id}/favoriteLeagues`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(favoriteLeagues),
    });
    return response.ok;
  }

  // Insert new favorite league for a user
  async insertNewFavoriteLeague(id, league) {
    const response = await fetch(`${this.apiBaseUrl}/${id}/favoriteLeagues`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(league),
    });
    return response.json();
  }

  // Get a specific favorite league by ID
  async getFavoriteLeague(id, leagueId) {
    const response = await fetch(`${this.apiBaseUrl}/${id}/favoriteLeagues/${leagueId}`, {
      method: 'GET',
      headers: this.headers,
    });
    return response.json();
  }
}