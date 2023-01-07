'use client';

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
      <div>{error.message}</div>
    </div>
  );
};

/**
 * 导出 Error
 */
export default Error;
