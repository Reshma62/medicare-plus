"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const MediButton = ({
  link,
  text,
  color = "primary",
  variant = "solid",
  ...props
}) => {
  return (
    <Button
      className="bg-primary-gradient relative rounded-full text-white font-bold px-4 py-2 capitalize before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-[linear-gradient(180deg,_#2CBEFF_0%,_rgba(0,_164,_244,_0)_78.65%)] before:filter before:blur-sm"
      as={Link}
      color={color}
      href={link}
      variant={variant}
      {...props}
    >
      {text}
    </Button>
  );
};

export default MediButton;
