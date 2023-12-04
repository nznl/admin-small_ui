import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import type { App } from 'vue';
import { transformComponent, sortRoutes } from '@/utils';
import { root } from './module/root';
import { createRouterGuard } from './guard/guard';

const { VITE_HASH_ROUTE, VITE_BASE_URL } = import.meta.env;

export const router = createRouter({
  history: VITE_HASH_ROUTE === 'Y' ? createWebHashHistory(VITE_BASE_URL) : createWebHistory(VITE_BASE_URL),
  routes: transformComponent(sortRoutes(root)) as any, // 基础路由
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0,
        left: 0,
        behavior: 'smooth'
      }
    }
  }
});

// 安装路由
export async function setupRouter(app: App) {
  app.use(router);
  await createRouterGuard(router);
  await router.isReady();
}