'use client';

import { appConfig } from '../config';
import './styles/error.css';

/**
 * 属性类型
 */
type ErrorProps = {
  error: Error;
};

/**
 * Error
 */
const Error = (props: ErrorProps) => {
  const { error } = props;

  /**
   * 视图
   */
  return (
    <div className="error">
      <div>
        {appConfig.isProduction
          ? '🌋 当前出了点小问题，我们会尽快解决：）'
          : error.message}
      </div>
    </div>
  );
};

/**
 * 导出 Error
 */
export default Error;
