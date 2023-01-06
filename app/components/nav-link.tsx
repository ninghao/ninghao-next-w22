import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

/**
 * 属性类型
 */
type NavLinkProps = {
  children: ReactNode;
  href: string;
};

/**
 * NavLink
 */
const NavLink = (props: NavLinkProps) => {
  const pathname = usePathname();

  /**
   * 视图
   */
  return (
    <Link href={props.href} className={pathname === props.href ? 'active' : ''}>
      {props.children}
    </Link>
  );
};

/**
 * 导出 NavLink
 */
export default NavLink;
