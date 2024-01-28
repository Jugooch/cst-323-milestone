import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router from your router configuration file

// Create Vue application and use the router
createApp(App).use(router).mount('#app');
