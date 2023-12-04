import type { ProxyOptions } from 'vite';


/**
 * 设置网络代理
 * @param isOpenProxy - 是否开启代理
 * @param envConfig - env环境配置
 */
export function createViteProxy(isOpenProxy: boolean, envConfig: any) {
  if (!isOpenProxy) return undefined;

  const proxy: Record<string, string | ProxyOptions> = {
    [envConfig.pattern]: {
      target: envConfig.url,
      changeOrigin: true,
      rewrite: path => path.replace(new RegExp(`^${envConfig.pattern}`), ''),
      bypass(req, res, options: any) {
        const proxyURL = options.target + options.rewrite(req.url);
        req.headers['x-req-proxyURL'] = proxyURL; 
        res.setHeader('x-req-proxyURL', proxyURL); 
      } // 显示真实求情地址
    }
  };
  return proxy;
}
