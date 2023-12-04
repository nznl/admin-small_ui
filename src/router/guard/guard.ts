//@ts-nocheck
import { dashboardRoute } from '../module/dashboard';
import type { Router } from 'vue-router';
import { transformComponent } from '@/utils';

const routeList = [dashboardRoute];
export async function createRouterGuard(router: Router) {
  await getRouteList(router);
  router.beforeEach(async (to, from, next) => {
    if (to.name === '404' && (to.redirectedFrom === undefined || to.redirectedFrom?.fullPath === '/')) {
      next({
        path: to.path, replace: true, query: to.query, hash: to.hash 
      }); // 防止addRoute的路由还没有加载完成就跳转到 404 页面
      return false;
    }
    next();
  });
}

async function getMenu() {
  
}

async function getRouteList(router: Router) {
  const routes = transformComponent(routeList);
  for(let i = 0, len = routes.length; i < len; i += 1) {
      router.addRoute(routes[i]);
  }
}