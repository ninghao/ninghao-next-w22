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
    data: { title, content, user },
  } = props;

  /**
   * 视图
   */
  return (
    <div>
      <div></div>
      <div>
        <div>{title}</div>
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
