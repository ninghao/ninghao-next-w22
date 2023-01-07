'use client';

import { useRouter } from 'next/navigation';
import { appConfig } from '../config';
import NavLink from './nav-link';

/**
 * AppHeader
 */
const AppHeader = () => {
  const router = useRouter();

  /**
   * 视图
   */
  return (
    <header>
      <div
        onClick={() => {
          router.push('/');
        }}
      >
        <span>🏝</span> {appConfig.appName}
      </div>
      <nav>
        <div>
          <NavLink href="/about">关于</NavLink>
        </div>
        <div>
          <NavLink href="/posts">内容</NavLink>
        </div>
      </nav>
    </header>
  );
};

/**
 * 导出 AppHeader
 */
export default AppHeader;
