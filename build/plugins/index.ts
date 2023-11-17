import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import unplugin from './unplugin';

export function setupVitePlugins(viteEnv: EnvDts.MetaEnvCustom) {
  return [
    vue(),
    UnoCSS(),
    ...unplugin(viteEnv)
  ]
}