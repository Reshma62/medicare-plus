"use client";

import { Button } from "@heroui/button"; 
import Link from "next/link";

const MediButton = ({ link, text, variant = "solid", className }) => {
  return (
    <Button
      className={`bg-primary-gradient relative rounded-full h-auto w-auto  font-bold px-6 py-3 capitalize after:content-[''] after:absolute after:inset-0 after:w-[96%] after:h-[55%] after:bg-[linear-gradient(180deg,_#FF5598_0%,_rgba(249,_250,_253,_0.00)_91%)]
      after:filter after:blur-[0.9px] after:z-0 after:rounded-full after:mx-auto  ${className}`}
      as={Link}
      href={link}
      variant={variant}
    >
      <span className="text-white relative z-50 text-[.85em] inline-block">{text}</span>
    </Button>
  );
};

export default MediButton;
