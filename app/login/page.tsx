'use client';

import { useAuth } from './hook';

/**
 * Page
 */
const Page = () => {
  const { name, setName, password, setPassword, login } = useAuth();

  /**
   * 视图
   */
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div>
        <input
          type="text"
          placeholder="名字"
          autoComplete="username"
          value={name}
          onChange={(event) => {
            setName(event.currentTarget.value);
          }}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="密码"
          autoComplete="current-password"
          value={password}
          onChange={(event) => {
            setPassword(event.currentTarget.value);
          }}
        />
      </div>
      <div>
        <button onClick={login}>登录</button>
      </div>
    </form>
  );
};

/**
 * 导出 Page
 */
export default Page;
