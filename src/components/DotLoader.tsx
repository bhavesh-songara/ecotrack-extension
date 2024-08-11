export const DotLoader = (props: { dotClassName?: string }) => {
  const { dotClassName } = props;

  return (
    <div className="dot-container">
      {Array.from({ length: 3 }).map((_, index) => {
        return <div key={index} className={`dot ${dotClassName}`}></div>;
      })}
    </div>
  );
};
