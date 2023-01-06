import Link from 'next/link';
import { appConfig } from '../config';

/**
 * AppHeader
 */
const AppHeader = () => {
  /**
   * 视图
   */
  return (
    <header>
      <div>
        <span>🏝</span> <Link href="/">{appConfig.appName}</Link>
      </div>
    </header>
  );
};

/**
 * 导出 AppHeader
 */
export default AppHeader;
