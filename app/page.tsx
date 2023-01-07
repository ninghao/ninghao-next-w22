import Link from 'next/link';
import fs from 'node:fs/promises';
import path from 'node:path';

/**
 * Page
 */
const Page = async () => {
  const filePath = path.join('public', 'README.md');
  const fileContent = await fs.readFile(filePath);

  /**
   * 视图
   */
  return (
    <div>
      <h1>首页</h1>
      <div>{fileContent.toString()}</div>
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
