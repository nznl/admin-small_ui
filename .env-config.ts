
const serviceEnv = {
  dev: {
    url: 'http://localhost:9090',
    pattern: '/api'
  },
  prod: {
    url: 'http://localhost:9090',
    pattern: '/api'
  }
}

export function getServiceEnvConfig(env: MetaEnvCustom) {
  const { VITE_SERVICE_ENV = 'dev' } = env;

  const config = serviceEnv[VITE_SERVICE_ENV];

  return {
    ...config
  };
}