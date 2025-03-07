const FlexBox = ({
  children,
  className = "",

}) => {
  return (
    <div
      className={`flex tablet:flex-row flex-col
     
        ${className}`}
    >
      {children}
    </div>
  );
};

export default FlexBox;
