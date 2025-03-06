"use client";

import { Image } from "@heroui/react";
import FlexBox from "../ui/FlexBox";
import heroImage from "../../../public/hero/heroimag.svg";
import MediButton from "../ui/MediButton";

const Hero = () => {
  return (
    <div className="bg-secondary-gradient font-openSans py-20">
      <div className="container  ">
        <FlexBox className=" ">
          <div className="xl:max-w-[50%]  w-full">
            <h1 className="font-bold capitalize text-[3.2em] max-w-full sm:!leading-tight leading-normal relative !tracking-[-0.05em]">
              Streamlining{"  "}
              <span className="relative inline-block text-primary">
                Healthcare
                <span className="underline"></span>
              </span>{" "}
              for Doctors, Connecting Patients Seamlessly
            </h1>

            <p className="text-secondary font-semibold text-[1em] py-5">
              A modern platform designed to simplify healthcare management for
              doctors and provide easy access to quality care for patients.
            </p>
            <div className="sm:space-x-5 space-y-4 sm:space-y-0">
              <MediButton
                link={"/"}
                text={"Join as a Doctor"}
                className={"uppercase px-9"}
              />
              <MediButton
                link={"/"}
                text={"Appointment Now"}
                className={"uppercase px-9"}
              />{" "}
            </div>
          </div>
          <div className="flex justify-center self-center flex-col -mt-16 md:mt-0">
            <Image className="top-[5em] max-w-full w-[40em]" src={heroImage.src} alt="hero" />
          </div>
        </FlexBox>
      </div>
    </div>
  );
};

export default Hero;
