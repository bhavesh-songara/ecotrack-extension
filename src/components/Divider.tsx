export const Divider = (props: { className?: string }) => {
  const { className } = props;

  return <div className={`bg-gray-200 h-[1px] w-full  ${className}`}></div>;
};
