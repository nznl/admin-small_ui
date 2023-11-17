import { createApp } from 'vue';
import App from './App.vue';
import 'virtual:uno.css';
import { setupRouter } from './router';
import { Icon } from "@iconify/vue";

async function setupApp() {
  const app = createApp(App);
  setupRouter(app);
  app.component('Icon', Icon);
  app.mount('#app');
}

setupApp();