'use client';

import { useCreatePost } from './hook';

/**
 * Page
 */
const Page = () => {
  const { title, setTitle, content, setContent, createPost } = useCreatePost();

  /**
   * 视图
   */
  return (
    <div>
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
