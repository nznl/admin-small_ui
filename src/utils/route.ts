import { getViewsComponents } from '@/views/index';
import { BasicLayout, BlankLayout } from '@/layouts';

const componentList: Record<string,() => Promise<Component>> = getViewsComponents();

// 给路由组件排序
export function sortRoutes(routes: RouteDts.Basic[]) {
  routes.sort((pre: RouteDts.Basic, next:  RouteDts.Basic ) => pre.meta.sort - next.meta.sort);
  routes.map((route:  RouteDts.Basic) => {
    if (route.children) {
      route.children.sort((cp:  RouteDts.Basic, cn:  RouteDts.Basic) => cp.meta.sort - cn.meta.sort);
    }
  })
  return routes;
}

// 是否是外链
function isHasHref(route: RouteDts.Basic) {
  return Boolean(route.meta.href);
}

// 是否是动态路由
function isDynamicRoute(route: RouteDts.Basic) {
  return Boolean(route.meta.dynamic);
}

// 是否创建路由
function isCreateRoute(route: RouteDts.Basic) {
  return Boolean(route.meta.isCreateRoute);
}

// 转换component
export function transformComponent(routeList: RouteDts.Basic[]) {
  for (let i = 0, len = routeList.length; i < len; i += 1) {
    const route: RouteDts.Basic = routeList[i];
    if (isHasHref(route)) {
      route.component = componentList['404'];
    }
    switch(route.component) {
      case 'self':
        route.component = componentList[route.name];
        break;
      case 'basic':
        route.component = BasicLayout;
        break;
      case 'blank':
        route.component = BasicLayout;
        break;
      case 'embed':
        route.component = componentList['embed_Embed'];
        break;
    }
    if (route.children) {
      transformComponent(route.children);
    }
  }
  return routeList;
}
