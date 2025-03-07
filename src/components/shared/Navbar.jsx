"use client";

import { Button, Image, useDisclosure } from "@heroui/react";
import FlexBox from "../ui/FlexBox";

import mediCareLogo from "../../../public/header/medicarelogo.svg";
import { navItem } from "../data/NavItem";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Carts from "./Carts";
import MediButton from "../ui/MediButton";
import MediIcon from "../ui/Typography/MediIcon";
import MobileMenu from "./MobileMenu";
import ContentBox from "../ui/ContentBox";
const Navbar = () => {
  const params = useParams();

  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const path = window.location.hash;
    setActiveSection(`/${path}`);
  }, [params]);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="font-openSans bg-white shadow">
      <ContentBox>
        <div className="flex items-center justify-between py-5">
          <Image
            src={mediCareLogo.src}
            alt="MedicarePlus"
            width={150}
            height={50}
          />

          {/* Desktop Nav */}
          <div className="hidden tablet:block">
            <ul className="flex gap-5 ">
              {navItem.map((item, index) => (
                <li
                  key={index}
                  className={`text-secondary font-semibold capitalize hover:text-primary transition-all relative before:absolute before:content-[''] before:-bottom-1 before:left-0 before:right-0 before:bg-primary before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:w-full before:h-0.5 hover:before:scale-x-100 ${
                    activeSection === item.link
                      ? "!text-primary before:scale-x-100"
                      : ""
                  }`}
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <FlexBox className="md:flex-row flex-col gap-5 hidden tablet:flex">
            <Carts />
            <MediButton
              link="/#"
              text={"Become a Doctor"}
              className={"uppercase font-bold"}
            />
          </FlexBox>

          {/* Mobile Nav */}
          <div className="tablet:hidden">
            <Button
              className="px-3 py-1 min-w-max h-auto"
              color="primary"
              variant="bordered"
              onPress={onOpen}
            >
              <MediIcon name={"menu-burger"} />
            </Button>

            <MobileMenu
              activeSection={activeSection}
              navItem={navItem}
              isOpen={isOpen}
              onOpenChange={onOpenChange}
            />
          </div>
        </div>
      </ContentBox>
    </div>
  );
};

export default Navbar;
