export {};
declare module 'vue' {
  export interface GlobalComponents {
    SetTheme: typeof import("../components/common/SetTheme.vue")['default'];
  }
}