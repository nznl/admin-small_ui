/** @type {import('vite').UserConfig} */
import { defineConfig, loadEnv } from 'vite';
import { getRootPath, getSrcPath, setupVitePlugins, createViteProxy } from './build';
import { getServiceEnvConfig } from './.env-config';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const viteEnv: MetaEnvCustom =  loadEnv(mode, process.cwd()) as MetaEnvCustom;
  const envConfig = getServiceEnvConfig(viteEnv);
  const isOpenProxy = viteEnv.VITE_HTTP_PROXY === 'Y';
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
          additionalData: `@use "./src/styles/element/index.scss" as *;`
        }
      }
    },
    server: {
      host: '0.0.0.0',
      port: 5173,
      open: true,
      proxy: createViteProxy(isOpenProxy, envConfig)
    },
    build: {
      // 构建选项
      rollupOptions: {

      }
    }
  }
})
