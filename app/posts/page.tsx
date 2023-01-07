import PostList from './components/post-list';
import { getPosts } from './service';

export const revalidate = 3600;

/**
 * Page
 */
const Page = async () => {
  const posts = await getPosts();

  console.log('🎄 内容列表');

  /**
   * 视图
   */
  return (
    <div>
      <PostList data={posts} />
    </div>
  );
};

/**
 * 导出 Page
 */
export default Page;
