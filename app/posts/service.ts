import { appConfig } from '../config';
import { PostList } from './type';

export const getPosts = async () => {
  const response = await fetch(`${appConfig.apiBaseUrl}/posts`);
  return response.json() as Promise<PostList>;
};
