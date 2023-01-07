import { useState } from 'react';
import { apiHttpClient } from '../service';

export const useCreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const createPost = async () => {
    if (title && content) {
      const response = await apiHttpClient('posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      if (response.status === 201) {
        const { insertId: postId } = await response.json();
        console.log(postId);

        setTitle('');
        setContent('');
      }
    }
  };

  return { title, setTitle, content, setContent, createPost };
};
