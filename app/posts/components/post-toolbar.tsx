'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { deletePostById } from '../service';

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
  const router = useRouter();

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
      <div>
        <Image
          src="/icons/delete.svg"
          alt="删除内容"
          width={20}
          height={20}
          onClick={async () => {
            await deletePostById(postId);
            router.refresh();
          }}
        />
      </div>
    </div>
  );
};

/**
 * 导出 PostToolbar
 */
export default PostToolbar;
