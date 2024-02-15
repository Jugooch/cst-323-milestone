<script>
import UserService from "../services/UserService";
import LeaguePill from "../components/LeaguePill.vue";

export default {
  name: "ProfilePage",
  components: {
    LeaguePill,
  },
  data() {
    return {
      userService: new UserService(),
      leagues: [], // Moved here to be filled asynchronously
    };
  },
  computed: {
    loggedInUser() {
      return this.$store.state.user;
    },
  },
  methods: {
    async logout() {
      this.$store.dispatch("loginUser", null);
      this.$router.push("/");
    },
    async deleteUser() {
      try {
        this.userService.deleteUser(this.loggedInUser.user_id);
        this.$store.dispatch("loginUser", null);
        this.$router.push("/");
      } catch (error) {
        console.error("Deletion error:", error);
        alert("Deletion failed.");
      }
    },
    async fetchLeagues() {
      try {
        const favoriteLeagues = await this.userService.getFavoriteLeagues(
          this.loggedInUser.user_id
        );
        const leaguesPromises = favoriteLeagues.map((league) =>
          this.userService.getLeague(league.league_id)
        );
        this.leagues = await Promise.all(leaguesPromises);
      } catch (error) {
        console.error("League fetch error:", error);
        this.leagues = [];
      }
    },
  },
  mounted() {
    this.fetchLeagues();
  },
};
</script>
<template>
  <div class="background">
    <div class="title-row">
      <router-link class="back" to="/">
        <img class="back-icon" src="../assets/icons/back.svg" />
      </router-link>
      <button class="sign-out-btn" v-on:click="logout">Sign Out</button>
      <button class="sign-out-btn" v-on:click="deleteUser">
        Delete Account
      </button>
    </div>
    <div class="header">
      <img src="../assets/logo.svg" alt="Logo" class="logo" />
      <h1 class="logo-title">ODDSPOT</h1>
      <h2 class="subheader">SPORTS ODDS HUB</h2>
    </div>
    <h1 class="main-title">{{ loggedInUser.name }}</h1>
  </div>
  <div class="profile-content">
    <div class="title-row">
      <h1>YOUR LEAGUES</h1>
      <button class="outline-btn">
        <img src="../assets//icons//add.svg" />
      </button>
    </div>
    <div v-if="leagues != null">
      <div class="leagues-row">
        <LeaguePill
          v-for="league in leagues"
          :key="league.id"
          :league="league"
        ></LeaguePill>
      </div>
    </div>
    <div v-else>
      <p>No Leagues Found</p>
    </div>
  </div>
</template>
<style scoped>
.leagues-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.sign-out-btn {
  background-color: red;
  color: white;
  border-radius: 50px;
  border: none;
  padding: 16px;
  font-weight: bold;
}

.profile-content {
  padding: 64px;
}

.outline-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border: 2px solid #20fc8f;
  border-radius: 50%;
  background: none;
}

.outline-btn > img {
  width: 16px;
  height: 16px;
}

.header {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.logo {
  width: 64px;
  height: 64px;
}

.logo-title {
  font-family: "Integral CF", sans-serif;
  font-size: 32px;
  font-weight: bold;
  margin: 10px;
}

.main-title {
  font-family: "Integral CF", sans-serif;
  font-size: 40px;
  font-weight: bold;
  margin: 10px;
}

.subheader {
  font-family: "Integral CF", sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #20fc8f;
  margin-top: 0px;
}

.background {
  width: 100%;
  height: 50vh;
  background: url("../assets/FootballBackground.png") center/cover no-repeat;
  padding: 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media only screen and (max-width: 950px) {  
  
  h1{
    font-size: 24px;
  }

  .leagues-row {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  }
}
</style>
