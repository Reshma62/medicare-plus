"use client";

import MediButton from "@/components/ui/MediButton";
import { Link } from "@heroui/react";

const page = () => {
  return (
    <div>
      Hello I am from page
      <Link href="/">Home</Link>
      <MediButton link="/" text="home" />
    </div>
  );
};

export default page;
