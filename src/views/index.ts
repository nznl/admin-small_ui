import type { Component } from "vue";

type viewComponent = Record<string, () => Promise<Component>>;

const views: viewComponent = import.meta.glob('./**/*.vue');
const COMPONENTS_KEY: string = 'com';
const viewsKey = Object.keys(views).filter((key: string) => !key.includes(COMPONENTS_KEY));

function getViewsComponents() {
  const components: viewComponent = {};
  viewsKey.forEach((key: string) => {
    // 将./login/Login.vue替换成login_Login
    const routeKey: string = key.replace('.vue', '').replace('./', '').replace(/\//g, '_');
    components[routeKey] = views[key];
  });
  return components;

}
export { getViewsComponents }