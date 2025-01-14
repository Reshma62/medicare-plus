const FlexBox = ({
  children,
  className = "",
  justify = "justify-between",
  align = "items-center",
}) => {
  return (
    <div
      className={`flex flex-col items-center ${justify} ${align} md:flex-row gap-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default FlexBox;
