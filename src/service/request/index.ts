import { createRequest } from './request';
import { getServiceEnvConfig } from '~/.env-config';

const { pattern } = getServiceEnvConfig(import.meta.env as any);

export const request = createRequest({ baseURL: pattern });