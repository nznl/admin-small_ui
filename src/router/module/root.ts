export const root = [
  {
    name: 'root',
    path: '/',
    redirect: import.meta.env.VITE_ROUTE_HOME_PATH,
    meta: {
      title: 'root',
      sort: 1
    },
  },
  {
    name: 'login_Login',
    path: '/login',
    component: 'self',
    meta: {
      title: '登录',
      sort: 1
    }
  },
    {
      name: '404',
      path: '/:pathMatch(.*)*',
      component: 'self',
      meta: {
        title: '未找到',
        sort: 1
      }
  }
];