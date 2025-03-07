const MediIcon = ({ name, size = "md" }) => {
  // Map size prop to Tailwind size classes with em values
  const sizeClasses = {
    sm: "text-[0.8em]", // Small icon
    md: "text-[1em]", // Default size (1em)
    lg: "text-[1.5em]", // Large icon
    xl: "text-[2em]", // Extra large icon
    "2xl": "text-[3em]", // Very large icon
    "xxl": "text-[4em]", // Very large icon
  };

  return (
    <i
      className={`fi fi-rr-${name} cursor-pointer ${
        sizeClasses[size] || sizeClasses.md
      }`}
    ></i>
  );
};

export default MediIcon;
