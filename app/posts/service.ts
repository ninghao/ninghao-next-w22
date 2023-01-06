import { appConfig } from '../config';
import { Post, PostList } from './type';

export const getPosts = async () => {
  const response = await fetch(`${appConfig.apiBaseUrl}/posts`);
  return response.json() as Promise<PostList>;
};

export const getPostById = async (postId: string | number) => {
  const response = await fetch(`${appConfig.apiBaseUrl}/posts/${postId}`);
  return response.json() as Promise<Post>;
};
