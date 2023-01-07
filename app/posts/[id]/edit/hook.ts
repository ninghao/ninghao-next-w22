import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { apiHttpClient } from '../../../service';
import { getPostById } from '../../service';

export const useEditPost = (postId: string) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  useEffect(() => {
    getPostById(postId).then(({ title, content }) => {
      setTitle(title);
      setContent(content);
    });
  }, [postId]);

  const editPost = async () => {
    if (title) {
      const response = await apiHttpClient(`posts/${postId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.status === 200) {
        router.push(`/posts/${postId}`);
      }
    }
  };

  return { title, setTitle, content, setContent, editPost };
};
