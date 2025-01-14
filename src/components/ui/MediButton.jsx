"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const MediButton = ({ link, text, variant = "solid", className }) => {
  return (
    <Button
      className={`bg-primary-gradient relative rounded-full h-auto w-auto  font-bold px-6 py-4 capitalize after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:bg-[linear-gradient(180deg,_#FF6769_0%,_rgba(255,_103,_105,_0.00)_78.65%)]
      after:filter after:blur-[1.2px] after:z-0  ${className}`}
      as={Link}
      href={link}
      variant={variant}
    >
      <span className="text-white relative z-50">{text}</span>
    </Button>
  );
};

export default MediButton;
