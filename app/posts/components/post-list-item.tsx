import Link from 'next/link';
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
    data: { title, content, user, id },
  } = props;

  /**
   * 视图
   */
  return (
    <div>
      <div></div>
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
