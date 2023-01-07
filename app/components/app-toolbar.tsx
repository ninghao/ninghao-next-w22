'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../login/provider';

/**
 * AppToolbar
 */
const AppToolbar = () => {
  const { currentUser } = useContext(AuthContext);

  /**
   * 视图
   */
  return (
    <div>
      {currentUser && (
        <>
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
