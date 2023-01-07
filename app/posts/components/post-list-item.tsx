import Image from 'next/image';
import Link from 'next/link';
import { appConfig } from '../../config';
import { Post } from '../type';

/**
 * 属性类型
 */
type PostListItemProps = {
  data: Post;
};

/**
 * PostListItem
 */
const PostListItem = (props: PostListItemProps) => {
  const {
    data: { title, content, user, id, file },
  } = props;

  const imageUrl = `${appConfig.apiBaseUrl}/files/${file.id}/serve?size=thumbnail`;

  /**
   * 视图
   */
  return (
    <div>
      <div>
        <Image src={imageUrl} width={64} height={64} alt="" quality={100} />
      </div>
      <div>
        <div>
          <Link href={`/posts/${id}`}>{title}</Link>
        </div>
        <div>{content}</div>
        <div>- {user.name}</div>
      </div>
    </div>
  );
};

/**
 * 导出 PostListItem
 */
export default PostListItem;
