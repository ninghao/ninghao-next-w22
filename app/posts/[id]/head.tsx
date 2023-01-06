/**
 * 属性类型
 */
type HeadProps = {
  params: { id: string };
};

/**
 * Head
 */
const Head = (props: HeadProps) => {
  /**
   * 视图
   */
  return (
    <>
      <title>{props.params.id}</title>
    </>
  );
};

/**
 * 导出 Head
 */
export default Head;
