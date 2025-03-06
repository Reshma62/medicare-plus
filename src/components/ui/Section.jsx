const Section = ({ children, useGradient = true }) => {
  return (
    <section
      className={`${
        useGradient ? "bg-section-gradient" : "bg-section-gradient-gray"
      } py-[3em]`}
    >
      {children}
    </section>
  );
};

export default Section;
