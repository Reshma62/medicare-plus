const ContentBox = ({ children }) => {
  return (
    <div className="w-full 2xl:container px-[1em] md:px-[7em] 2xl:px-0">
      {children}
    </div>
  );
};

export default ContentBox;
