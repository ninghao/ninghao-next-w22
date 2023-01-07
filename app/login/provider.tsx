'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

/**
 * 属性类型
 */
type AuthProviderProps = {
  children: ReactNode;
};

type CurrentUser = { id: number; name: string; token: string };

type AuthContextValue = {
  currentUser?: CurrentUser;
  setCurrentUser?: Dispatch<SetStateAction<CurrentUser | undefined>>;
};

export const AuthContext = createContext<AuthContextValue>({});

/**
 * AuthProvider
 */
const AuthProvider = (props: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>();

  /**
   * 视图
   */
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

/**
 * 导出 AuthProvider
 */
export default AuthProvider;
