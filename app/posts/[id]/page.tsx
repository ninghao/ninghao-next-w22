import Image from 'next/image';
import { appConfig } from '../../config';
import { getPostById, getPosts } from '../service';

export const generateStaticParams = async () => {
  const posts = await getPosts();

  return posts.map((item) => ({
    id: `${item.id}`,
  }));
};

/**
 * 属性类型
 */
type PageProps = {
  params: { id: string };
};

/**
 * Page
 */
const Page = async (props: PageProps) => {
  const post = await getPostById(props.params.id);
  const { title, content, file } = post;
  const imageUrl = `${appConfig.apiBaseUrl}/files/${file.id}/serve?size=large`;

  console.log('🌵', title);

  /**
   * 视图
   */
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ position: 'relative', height: '60vh' }}>
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h1>{title}</h1>
      <div>{content}</div>
    </div>
  );
};

/**
 * 导出 Page
 */
export default Page;
