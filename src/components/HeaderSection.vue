<script>
export default {
  name: "HeroSection",
  computed: {
    loggedInUser() {
      if(this.$store.state.user != null){
        console.log("Evaluating loggedInUser: " + this.$store.state.user.name);
      }
      return this.$store.state.user;
    },
  },
};
</script>

<template>
  <div class="hero">
    <div align="right">
      <router-link v-if="(loggedInUser == null)" class="sign-in-button" to="/login">
        <img class="icon" src="../assets/icons/profile.svg" />
        Sign In
      </router-link>
      <router-link v-if="(loggedInUser != null)" class="sign-in-button" to="/profile">
        <img class="icon" src="../assets/icons/profile.svg" />
        {{loggedInUser.name}}
      </router-link>
    </div>
    <div class="header">
      <img src="../assets/logo.svg" alt="Logo" class="logo" />
      <h1 class="main-title">ODDSPOT</h1>
      <h2 class="subheader">SPORT ODDS HUB</h2>
    </div>
    <div class="headerItems">
      <div class="headerItem">
        <p>REAL-TIME DATA</p>
      </div>
      <div class="headerItem">
        <p>OVER 100 SPORTS</p>
      </div>
      <div class="headerItem">
        <p>ACCURATE ODDS</p>
      </div>
    </div>
    <div class="arrow-container">
      <p class="explore-text">Explore Content Below</p>
      <div class="white-arrow"></div>
    </div>
  </div>
</template>

<style scoped>
.arrow-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.explore-text {
  color: #fff;
  font-size: 18px;
}

.white-arrow {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 15px solid #fff;
  margin-top: 0px;
  animation: bounce 2s infinite alternate;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(8px);
  }
}

p {
  color: #20fc8f;
  font-family: "Integral CF", sans-serif;
  font-weight: 500;
}

.heroSpacing {
  height: 64px;
}

.headerItems {
  display: flex;
  justify-content: space-between;
}

.headerItem {
  width: 25%;
  height: 240px;
  border-radius: 30px;
  border: 4px solid #20fc8f;
  background: hsla(60, 3%, 25%, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;
}

.hero {
  width: 100%;
  height: 100vh;
  background: url("../assets/FootballBackground.png") center/cover no-repeat;
  padding: 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sign-in-button {
  width: fit-content;
  padding: 10px 15px;
  background-color: #20fc8f;
  color: #fff;
  border: none;
  border-radius: 32px;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.icon {
  margin-right: 16px;
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

@media only screen and (max-width: 762px) {
  .sign-in-button {
    padding: 8px;
    background-color: #20fc8f;
    color: #fff;
    border: none;
    border-radius: 32px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .explore-text{
    font-size: 16px;
  }

  .heroSpacing {
    height: 24px;
  }

  .headerItems {
    display: flex;
    flex-direction: column;
  }

  .headerItem {
    width: 100%;
    height: 72px;
    border-radius: 30px;
    border: 2px solid #20fc8f;
    background: hsla(60, 3%, 25%, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

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
