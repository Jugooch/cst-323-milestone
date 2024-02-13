<script>
import UserService from '../services/UserService';

export default {
  name: "RegisterPage",  
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      userService: new UserService(),
    };
  },
  methods: {
    async registerUser() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
      
      const newUser = {
        name: `${this.firstName} ${this.lastName}`,
        email_address: this.email,
        password: this.password,
      };
      
      try {
        const response = await this.userService.postUser(newUser);
        console.log("Registration successful", response);
        // Redirect or update state as needed after successful registration
        this.$router.push('/login'); // Redirect to login page
      } catch (error) {
        console.error("Registration error:", error);
        alert("Registration failed.");
      }
    },
  },
};
</script>
<template>
  <div class="background">
    <router-link class="back" to="/login">
      <img class=".back-icon" src="../assets/icons/back.svg" />
    </router-link>
    <form @submit.prevent="registerUser">
      <div class="login-form">
        <h2 class="subheader">CREATE YOUR ACCOUNT</h2>
        <div class="input-group">
          <input v-model="firstName" id="first-name" type="text" placeholder="First Name"/>
          <input v-model="lastName" id="last-name" type="text" placeholder="Last Name"/>
          <input v-model="email" id="email" type="text" placeholder="Email"/>
          <input v-model="password" id="password" type="password" placeholder="Password"/>
          <input v-model="confirmPassword" id="confirm-password" type="password" placeholder="Confirm Password"/>
        </div>
        <div class="accept-terms">
          <button type="submit" class="primary-btn">Sign Up</button>
        </div>
      </div>
    </form>
  </div>
</template>
<style>

.input-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.input-group>input{
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
  gap: 32px;
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

.primary-btn{
  background-color: #20fc8f;
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  width: 100%;
  border-radius: 50px;
  border: none;
}

.text-btn{
  color: #20fc8f;
  background: none;
  border: none;
  text-decoration: none;
}

p{
  color: white;
}
</style>