import { createApp } from 'vue';
import { createStore } from 'vuex';
import { createLogger } from 'vue-logger-plugin';
import App from './App.vue';
import router from './router'; // Assuming you have a router setup


// Create a new store instance.
const store = createStore({
  state() {
    return {
      user: null // Initially, no user is logged in
    };
  },
  mutations: {
    setUser(state, newUser) {
      state.user = newUser; // Update the user state
    }
  },
  actions: {
    loginUser({ commit }, user) {
      commit('setUser', user);
    }
  }
});

// Create Vue application
const app = createApp(App);

// Install the store instance as a plugin
app.use(store);

// Use the router
app.use(router);

app.use(createLogger());

// Now mount the app
app.mount('#app');
