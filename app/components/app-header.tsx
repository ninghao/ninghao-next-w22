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
        <span>🏝</span> {appConfig.appName}
      </div>
    </header>
  );
};

/**
 * 导出 AppHeader
 */
export default AppHeader;
