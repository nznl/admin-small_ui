
declare namespace RouteDts {

  type Component = import('vue').Component;

  interface Basic {
    name: string;
    component?: Component | string;
    path: string;
    meta: {
      title: string;
      sort: number;
      href?: string; 
      dynamic?: string | boolean; // 是否动态路由
      isCreateRoute?: string | boolean; // 是否创建路由
      icon?: string; // 目录图表
      hidden?: boolean | string; // 是否隐藏菜单
    },
    children?: Basic[]; // 子级
  }

}