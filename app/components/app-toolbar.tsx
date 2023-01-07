'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../login/provider';

/**
 * AppToolbar
 */
const AppToolbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  /**
   * 视图
   */
  return (
    <div>
      {currentUser && (
        <>
          <div>
            <Link href="/create">
              <Image
                src="/icons/add.svg"
                alt="添加内容"
                width={24}
                height={24}
              />
            </Link>
          </div>
          <div>
            <Image
              src="/icons/logout.svg"
              alt="退出登录"
              width={24}
              height={24}
              onClick={() => logout!()}
            />
          </div>
          <div>{currentUser.name}</div>
        </>
      )}
      {!currentUser && (
        <div>
          <Link href="/login">
            <Image src="/icons/account.svg" alt="登录" width={24} height={24} />
          </Link>
        </div>
      )}
    </div>
  );
};

/**
 * 导出 AppToolbar
 */
export default AppToolbar;
