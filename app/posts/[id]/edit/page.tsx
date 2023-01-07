'use client';

import { useEditPost } from './hook';

/**
 * 属性类型
 */
type PageProps = {
  params: { id: string };
};

/**
 * Page
 */
const Page = ({ params: { id } }: PageProps) => {
  const { title, setTitle, content, setContent, editPost } = useEditPost(id);

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
        <button onClick={editPost}>编辑</button>
      </div>
    </div>
  );
};

/**
 * 导出 Page
 */
export default Page;
