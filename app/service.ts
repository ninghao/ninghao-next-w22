import { appConfig } from './config';

const apiHttpClientHeaders: Record<string, any> = {};

export const setAuthHeader = (token?: string) => {
  if (token) {
    apiHttpClientHeaders['Authorization'] = `Bearer ${token}`;
  } else {
    delete apiHttpClientHeaders['Authorization'];
  }
};

export const apiHttpClient = async (api: string, init?: RequestInit) => {
  const response = await fetch(`${appConfig.apiBaseUrl}/${api}`, {
    ...init,
    headers: {
      ...apiHttpClientHeaders,
      ...init?.headers,
    },
  });

  return response;
};
