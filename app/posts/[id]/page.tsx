/**
 * 属性类型
 */
type PageProps = {
  params: { id: string };
};

/**
 * Page
 */
const Page = (props: PageProps) => {
  /**
   * 视图
   */
  return <div>内容 {props.params.id}</div>;
};

/**
 * 导出 Page
 */
export default Page;
