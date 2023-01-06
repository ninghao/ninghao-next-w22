import { appConfig } from '../../config';
import { getPostById } from '../service';

/**
 * 属性类型
 */
type HeadProps = {
  params: { id: string };
};

/**
 * Head
 */
const Head = async (props: HeadProps) => {
  const post = await getPostById(props.params.id);
  const { title } = post;
  const pageTitle = `${title} - ${appConfig.appName}`;

  /**
   * 视图
   */
  return (
    <>
      <title>{pageTitle}</title>
    </>
  );
};

/**
 * 导出 Head
 */
export default Head;
