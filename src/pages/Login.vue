<script>
import UserService from "../services/UserService"; // Adjust the import path as necessary
import { useLogger } from "vue-logger-plugin"; // Import the logger plugin

export default {
  name: "LoginPage",
  setup() {
    const log = useLogger();
    log.info("Login page loaded");
  },
  data() {
    return {
      email: "",
      password: "",
      userService: new UserService(),
      loginError: false,
    };
  },

  computed: {
    // Define computed properties here, outside the data function
    loggedInUser() {
      return this.$store.state.user;
    },
  },
  methods: {
    async login() {
      this.$log.log("Entering Login Method");
      try {
        const response = await this.userService.loginUser(
          this.email,
          this.password
        );

        if (response != null) {
          this.$store.dispatch("loginUser", response);
          this.loginError = false;
          this.$router.push('/'); // Redirect to home page
        } else {
          this.loginError = true;
        }
      } catch (error) {
        console.error("Login error:", error);
        this.loginError = true;
      }
      this.$log.log("Exiting Login Method");
    },
  },
};
</script>
<template>
  <div class="background">
    <router-link class="back" to="/">
      <img class="back-icon" src="../assets/icons/back.svg" />
    </router-link>
    <div class="header">
      <img src="../assets/logo.svg" alt="Logo" class="logo" />
      <h1 class="main-title">ODDSPOT</h1>
      <h2 class="subheader">SPORTS ODDS HUB</h2>
    </div>
    <!-- Show error message when loginError is true -->
    <div v-if="loginError">
      <p style="color: red">Error logging in... Please Try again</p>
    </div>
    <form @submit.prevent="login">
      <div class="login-form">
        <h2 class="subheader">SIGN INTO YOUR ACCOUNT</h2>
        <div class="input-group">
          <input
            v-model="email"
            id="email"
            type="text"
            placeholder="Email..."
          />
          <input
            v-model="password"
            id="password"
            type="password"
            placeholder="Password..."
          />
          <button type="submit" class="primary-btn">Sign In</button>
        </div>
        <div class="register">
          <p>Don't have an account?</p>
          <router-link class="text-btn" to="/register"
            >Sign up now!</router-link
          >
        </div>
      </div>
    </form>
  </div>
</template>

<style>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.input-group > input {
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: white;
  color: black;
  text-align: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  border-radius: 30px;
  border: 4px solid #20fc8f;
  background: hsla(60, 3%, 25%, 0.7);
}

.background {
  width: 100%;
  height: 100vh;
  background: url("../assets/FootballBackground.png") center/cover no-repeat;
  padding: 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.back {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #20fc8f;
  padding: 8px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  align-self: flex-start;
}

.back-icon {
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
  width: 165px;
  height: 165px;
}

.main-title {
  font-family: "Integral CF", sans-serif;
  font-size: 64px;
  font-weight: bold;
  margin: 10px;
}

.subheader {
  font-family: "Integral CF", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #20fc8f;
}

.primary-btn {
  background-color: #20fc8f;
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  border-radius: 50px;
  border: none;
}

.text-btn {
  color: #20fc8f;
  background: none;
  border: none;
  text-decoration: none;
}

p {
  color: white;
}

@media only screen and (max-width: 762px) {
  .logo {
    width: 64px;
    height: 64px;
    margin-top: 16px;
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
}
</style>
