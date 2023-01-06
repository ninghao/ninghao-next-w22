'use client';

import { useRouter } from 'next/navigation';
import { appConfig } from '../config';

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
    </header>
  );
};

/**
 * 导出 AppHeader
 */
export default AppHeader;
