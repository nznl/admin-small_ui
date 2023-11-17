/** @type {import('vite').UserConfig} */
import { defineConfig, loadEnv } from 'vite';
import { getRootPath, getSrcPath, setupVitePlugins } from './build';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const viteEnv: EnvDts.MetaEnvCustom =  loadEnv(mode, process.cwd()) as EnvDts.MetaEnvCustom;
  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '~': getRootPath(),
        '@': getSrcPath()
      }
    },
    plugins: setupVitePlugins(viteEnv),
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/styles/element.scss" as *;`
        }
      }
    },
    server: {

    },
    build: {
      // 构建选项
      rollupOptions: {

      }
    }
  }
})
