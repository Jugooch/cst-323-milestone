import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Leagues from './pages/Leagues.vue';
import Login from './pages/Login.vue';
import Preferences from './pages/Preferences.vue';
import Register from './pages/Register.vue';
import Profile from './pages/Profile.vue';
import Games from './pages/Games.vue';
import ConfirmEmail from './pages/ConfirmEmail.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/register/confirm', component: ConfirmEmail, props: true },
  { path: '/profile', component: Profile },
  { path: '/profile/preferences', component: Preferences },
  { path: '/leagues', component: Leagues},
  { path: '/leagues/:id', component: Games, props: true },
];

const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes,
});

export default router;