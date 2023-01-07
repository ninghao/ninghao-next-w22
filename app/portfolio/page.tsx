import Image from 'next/image';
import { CSSProperties } from 'react';
import p1 from '/public/images/4612.jpg';
import p2 from '/public/images/4293.jpg';
import p3 from '/public/images/4423.jpg';
import p4 from '/public/images/5122.jpg';

/**
 * Page
 */
const Page = () => {
  const imageStyles: CSSProperties = { objectFit: 'cover' };

  /**
   * 视图
   */
  return (
    <div>
      <div style={{ position: 'relative', height: 560 }}>
        <Image fill src={p1} alt="" style={imageStyles} quality={80} />
      </div>
    </div>
  );
};

/**
 * 导出 Page
 */
export default Page;