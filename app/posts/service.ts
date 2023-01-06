import { appConfig } from '../config';

export const getPosts = async () => {
  const response = await fetch(`${appConfig.apiBaseUrl}/posts`);
  return response.json();
};
