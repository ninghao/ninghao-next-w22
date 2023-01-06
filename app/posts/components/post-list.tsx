import { PostList } from '../type';
import PostListItem from './post-list-item';
import './styles/post-list.css';

/**
 * 属性类型
 */
type PostListProps = {
  data: PostList;
};

/**
 * PostList
 */
const PostList = (props: PostListProps) => {
  /**
   * 视图
   */
  return (
    <div className="post-list">
      {props.data.map((item) => (
        <PostListItem data={item} key={item.id} />
      ))}
    </div>
  );
};

/**
 * 导出 PostList
 */
export default PostList;
