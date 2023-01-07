import { notFound } from 'next/navigation';
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

  if (response.status === 500) {
    throw new Error('🌋 后端服务出了点问题。');
  }

  if (response.status === 404) {
    notFound();
  }

  return response;
};
