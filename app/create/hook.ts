import { useRef, useState } from 'react';
import { apiHttpClient } from '../service';

export const useCreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [file, setFile] = useState<File | null>();
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const fileInput = useRef<HTMLInputElement>(null);

  const createImagePreview = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      setImagePreviewUrl(event.target?.result as string);
    };
  };

  const createFile = async (file: File, postId: number) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await apiHttpClient(`files?post=${postId}`, {
      method: 'POST',
      body: formData,
    });

    if (response.status === 201) {
      setFile(null);
      setImagePreviewUrl('');
      fileInput.current!.value = '';
    }
  };

  const createPost = async () => {
    if (title && content && file) {
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
        await createFile(file, postId);

        setTitle('');
        setContent('');
      }
    }
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    createPost,
    file,
    setFile,
    fileInput,
    imagePreviewUrl,
    setImagePreviewUrl,
    createImagePreview,
    createFile,
  };
};
