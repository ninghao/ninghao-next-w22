import Image from 'next/image';
import { CSSProperties } from 'react';
import p1 from '/public/images/4612.jpg';

/**
 * Page
 */
const Page = () => {
  const imageStyles: CSSProperties = { width: '100%', height: 'auto' };

  /**
   * 视图
   */
  return (
    <div>
      <div>
        <Image src={p1} alt="" style={imageStyles} />
      </div>
    </div>
  );
};

/**
 * 导出 Page
 */
export default Page;
