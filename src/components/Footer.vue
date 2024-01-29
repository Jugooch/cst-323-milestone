<script>
export default {
  name: "FooterSection",
  props: {
    loggedIn: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<template>
  <div class="footer">
    <div class="header">
      <img src="../assets/logo.svg" alt="Logo" class="logo" />
      <h1 class="main-title">ODDSPOT</h1>
      <h2 class="subheader">SPORTS ODDS HUB</h2>
    </div>
    <div class="links">
      <h3 class="subheader">Upcoming Games</h3>
      <h3 class="subheader">Sports Leagues</h3>
      <h3 class="subheader">Recent Game Scores</h3>
    </div>
    <button class="sign-in-button">
      <img class="icon" src="../assets/icons/profile.svg" />
      Sign In
    </button>
  </div>
  <p align="center" style="margin-left: 64px; margin-right: 64px;">Copyright © 2024 Not Yet, Hopefully Soon. Maybe Some rights reserved</p>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 64px;
margin-left: 64px;
}

p {
  color: #fff;
  font-family: "Inter", sans-serif;
  font-weight: 100;
}

.links{
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 0px;
}

.links>h3{
    font-family: 'Inter', sans-serif;
    font-weight: 600;
}

.sign-in-button {
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
    margin-bottom: 0px;
}

.icon {
  margin-right: 16px;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
    margin-bottom: 0px;
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

@media only screen and (max-width: 950px) {

    .links{
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 32px;
    }

    .footer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-right: 64px;
        margin-left: 64px;
    }

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
    margin-bottom: 32px;
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

  .header{ 
    margin-bottom: 32px;
  }
}
</style>
