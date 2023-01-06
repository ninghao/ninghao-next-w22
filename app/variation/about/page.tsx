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
      <h1>关于</h1>
      <div>宁皓网创建于 2011 年。🎉</div>
      <div>
        <Link href="/">← 回到首页</Link>
      </div>
    </div>
  );
};

/**
 * 导出 Page
 */
export default Page;
