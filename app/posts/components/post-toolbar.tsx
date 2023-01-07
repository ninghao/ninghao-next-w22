import Image from 'next/image';
import Link from 'next/link';

/**
 * 属性类型
 */
type PostToolbarProps = {
  postId: number | string;
};

/**
 * PostToolbar
 */
const PostToolbar = ({ postId }: PostToolbarProps) => {
  /**
   * 视图
   */
  return (
    <div>
      <div>
        <Link href={`/posts/${postId}/edit`}>
          <Image src="/icons/edit.svg" alt="编辑内容" width={20} height={20} />
        </Link>
      </div>
    </div>
  );
};

/**
 * 导出 PostToolbar
 */
export default PostToolbar;
