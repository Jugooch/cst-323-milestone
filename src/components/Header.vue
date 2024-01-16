<script>
export default {
  name: 'HeroSection',
}
</script>

<template>
    <div class="hero">
        <div align="right">
            <button class="sign-in-button">
                <img class="icon" src="../assets/icons/profile.svg"/>
                Sign In
            </button>
        </div>
      <div class="header">
        <img src="../assets/logo.svg" alt="Logo" class="logo" />
        <h1 class="main-title">ODDSPOT</h1>
        <h2 class="subheader">SPORTS ODDS HUB</h2>
      </div>
      <div class="heroSpacing"></div>
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
    position: absolute;
    bottom: 20px;
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

  p{
    color: #20FC8F;
    font-family: 'Integral CF', sans-serif;
    font-weight: 500;
  }

  .heroSpacing{
    height: 64px;
  }

  .headerItems{
    display: flex;
    justify-content: space-between;
  }

  .headerItem{
    width: 25%;
    height: 240px;
    border-radius: 30px;
    border: 4px solid #20FC8F;
    background: hsla(60, 3%, 25%, .7);
    display: flex;
    justify-content: center;
    align-items: center;
  }

    .hero {
      width: 100%;
      height: 100vh;
        background: url('../assets/FootballBackground.png') center/cover no-repeat;
        padding: 60px;
        box-sizing: border-box;
    }
  
    .sign-in-button {
      padding: 10px 15px;
      background-color: #20FC8F;
      color: #fff;
      border: none;
      border-radius: 32px;
      font-size: 24px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
  
    .icon {
      margin-right: 8px;
    }
  
    .header {
      text-align: center;
      color: #fff;
    }
  
    .logo {
      width: 165px;
      height: 165px;
    }
  
    .main-title {
      font-family: 'Integral CF', sans-serif;
      font-size: 64px;
      font-weight: bold;
      margin: 10px 0;
    }
  
    .subheader {
      font-family: 'Integral CF', sans-serif;
      font-size: 24px;
      font-weight: bold;
      color: #20FC8F;
      /* Add additional styles for your subheader if needed */
    }
  </style>
  