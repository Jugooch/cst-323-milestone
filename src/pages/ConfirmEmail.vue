<script>
import UserService from "../services/UserService";

export default {
  name: "ConfirmEmail",
  props: {
    user: {
      required: true,
    },
  },
  data() {
    return {
      confirmationCode: "",
      isError: false,
      userService: new UserService(),
    };
  },
  methods: {
    async registerUser() {
      if (
        this.confirmationCode ==
        this.userService.verifyCode(this.user.email_address)
      ) {
        try {
          await this.userService.postUser(this.user);
          this.$router.push("/login");
        } catch (error) {
          console.error("Confirmation error:", error);
          alert("Confirmation failed.");
        }
      } else {
        this.isError = true;
      }
    },
  },
};
</script>
<template>
  <div class="background">
    <router-link class="back" to="/login">
      <img class="back-icon" src="../assets/icons/back.svg" />
    </router-link>
    <!-- Show error message when loginError is true -->
    <div v-if="isError">
      <p style="color: red">Error Confirming... Please Try again</p>
    </div>
    <form @submit.prevent="registerUser">
      <div class="confirm-form">
        <h2 class="subheader">CHECK YOUR EMAIL</h2>
        <p>
          A 6 digit code was just sent to your email. Please enter the code that
          was sent to email:
        </p>
        <p style="color: #20fc8f">{{ user.email_address }}</p>
        <input
          v-model="confirmationCode"
          id="confirmation"
          type="text"
          placeholder="XXX-XXX"
        />
        <button type="submit" class="primary-btn">Confirm Email</button>
      </div>
    </form>
  </div>
</template>
<style>
.confirm-form {
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

.primary-btn {
  background-color: #20fc8f;
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  width: 100%;
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
</style>
