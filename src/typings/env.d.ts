
declare namespace EnvDts {
    
  interface MetaEnvCustom extends ImportMetaEnv {
    // 基础路径
    readonly VITE_BASE_URL: string;
    // 项目名称
    readonly VITE_APP_NAME: string;
    // 项目描述
    readonly VITE_APP_DESC: string;
    // 项目端口
    readonly VITE_SERVER_PORT: string;
    // 是否开启代理
    readonly VITE_HTTP_PROXY: 'Y' | 'N';
    // 路由器使用的历史记录模式是否是hash
    readonly VITE_HASH_ROUTE: 'Y' | 'N';
  }
    
} 
