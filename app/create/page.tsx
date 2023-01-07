'use client';

import Image from 'next/image';
import { useCreatePost } from './hook';

/**
 * Page
 */
const Page = () => {
  const {
    title,
    setTitle,
    content,
    setContent,
    createPost,
    setFile,
    fileInput,
    imagePreviewUrl,
    setImagePreviewUrl,
    createImagePreview,
  } = useCreatePost();

  /**
   * 视图
   */
  return (
    <div
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];

        if (file) {
          setFile(file);
          createImagePreview(file);
        }
      }}
    >
      <div>
        {imagePreviewUrl && (
          <Image
            src={imagePreviewUrl}
            width={378}
            height={378}
            alt="图像预览"
          />
        )}
      </div>
      <div>
        <button
          className="bordered"
          onClick={() => {
            fileInput.current?.click();
          }}
        >
          选择图像文件
        </button>
        <input
          type="file"
          hidden
          ref={fileInput}
          accept="image/png, image/jpeg, image/jpg"
          onChange={({ currentTarget: { files } }) => {
            if (files && files[0]) {
              setFile(files[0]);
              createImagePreview(files[0]);
            } else {
              setFile(null);
              setImagePreviewUrl('');
            }
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="标题"
          value={title}
          onChange={(event) => {
            setTitle(event.currentTarget.value);
          }}
        />
      </div>
      <div>
        <textarea
          placeholder="正文"
          value={content}
          onChange={(event) => {
            setContent(event.currentTarget.value);
          }}
        ></textarea>
      </div>
      <div>
        <button onClick={createPost}>发布</button>
      </div>
    </div>
  );
};

/**
 * 导出 Page
 */
export default Page;
