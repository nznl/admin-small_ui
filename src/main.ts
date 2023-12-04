import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';
import { Icon } from "@iconify/vue";
import 'element-plus/dist/index.css'
import 'virtual:uno.css';
import './styles/index.scss';
import { registerElTools } from '@/utils';

async function setupApp() {
  registerElTools();
  const app = createApp(App);
  await setupRouter(app);
  app.component('Icon', Icon);
  app.mount('#app');
}

setupApp();