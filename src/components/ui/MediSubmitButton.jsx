"use client";
import { Button } from "@nextui-org/react";

const MediSubmitButton = ({ text, variant = "solid", ...props }) => {
  return (
    <Button
      type="submit"
      className="bg-primary-gradient relative rounded-full text-white font-bold px-4 py-2 capitalize before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-[linear-gradient(180deg,_#FF6769_0%,_rgba(255,_103,_105,_0.00)_78.65%)]
      before:filter before:blur-[1.2px]"
      variant={variant}
      {...props}
      fullWidth
    >
      {text}
    </Button>
  );
};

export default MediSubmitButton;
