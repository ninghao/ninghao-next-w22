import { apiHttpClient } from '../service';
import { Post, PostList } from './type';

export const getPosts = async () => {
  const response = await apiHttpClient(`posts`);
  return response.json() as Promise<PostList>;
};

export const getPostById = async (postId: string | number) => {
  const response = await apiHttpClient(`posts/${postId}`);
  return response.json() as Promise<Post>;
};
