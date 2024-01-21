import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import Leagues from '../pages/Leagues.vue';
import Login from '../pages/Login.vue';
import Preferences from '../pages/Preferences.vue';
import Register from '../pages/Register.vue';
import Profile from '../pages/Profile.vue';
import Games from '../pages/Games.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/profile', component: Profile },
  { path: '/preferences', component: Preferences },
  { path: '/leagues', component: Leagues},
  { path: '/leagues/:id', component: Games, props: true },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
