import Link from 'next/link';

/**
 * Page
 */
const Page = () => {
  /**
   * 视图
   */
  return (
    <div>
      <h1>首页</h1>
      <div>我在宁皓网学习 Next.js。</div>
      <div>
        <Link href="/about">关于我们 →</Link>
      </div>
    </div>
  );
};

/**
 * 导出 Page
 */
export default Page;
