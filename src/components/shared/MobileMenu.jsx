"use client";

import { Drawer, DrawerBody, DrawerContent } from "@nextui-org/react";
import Link from "next/link";
import FlexBox from "../ui/FlexBox";
import Carts from "./Carts";
import MediButton from "../ui/MediButton";

const MobileMenu = ({ isOpen, onOpenChange, navItem, activeSection }) => {
  return (
    <div>
      <>
        <Drawer
          radius="none"
          size="sm"
          isDismissable={false}
          isKeyboardDismissDisabled={true}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          classNames={{ wrapper: "!max-w-[80%] ml-auto" }}
        >
          <DrawerContent>
            {(onClose) => (
              <>
                <DrawerBody>
                  <div className=" pt-8">
                    <ul className="flex flex-col gap-5 ">
                      {navItem.map((item, index) => (
                        <li
                          onClick={onClose}
                          key={index}
                          className={`text-secondary font-semibold capitalize hover:text-primary transition-all relative before:absolute before:content-[''] before:-bottom-1 before:left-0 before:right-0 before:bg-primary before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:w-full before:h-0.5 hover:before:scale-x-100 inline-flex ${
                            activeSection === item.link
                              ? "!text-primary before:scale-x-100"
                              : ""
                          }`}
                        >
                          <Link href={item.link}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>

                    <FlexBox
                      justify="space-between"
                      align="items-center"
                      className="!flex-row mt-4"
                    >
                      <Carts />
                      <MediButton
                        link="/#"
                        text={"Appointment Now"}
                        className={"uppercase font-bold"}
                      />
                    </FlexBox>
                  </div>
                </DrawerBody>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </>
    </div>
  );
};

export default MobileMenu;
