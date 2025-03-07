"use client";

import { Image } from "@heroui/react";
import FlexBox from "../ui/FlexBox";
import heroImage from "../../../public/hero/heroimag.svg";
import hero1 from "../../../public/hero/hero_image.png";
import hero2 from "../../../public/hero/hero1.jpg";
import hero3 from "../../../public/hero/hero.jpg";
import MediButton from "../ui/MediButton";
import ContentBox from "../ui/ContentBox";

const Hero = () => {
  return (
    <div className="bg-secondary-gradient font-openSans py-8 md:h-[87vh] flex items-center flex-col justify-center">
      <ContentBox>
        <FlexBox className=" justify-between items-center gap-[3em]">
          <div className="xl:max-w-[50%]  w-full 2xl:pr-[2em]">
            <h1 className="font-bold font-outfit capitalize text-[2.8em] 2xl:text-[3em]  max-w-full !leading-tight relative !tracking-[-0.02em]">
              Streamlining{"  "}
              <span className="relative inline-block text-primary">
                Healthcare
                <span className="underline"></span>
              </span>{" "}
              for Doctors, Connecting Patients Seamlessly
            </h1>

            <p className="text-secondary font-semibold text-[1em] py-5 font-outfit">
              A modern platform designed to simplify healthcare management for
              doctors and provide easy access to quality care for patients.
            </p>
            <div className="gap-[1em]   flex  items-center">
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
          <div className=" flex w-full xl:max-w-[50%] 2xl:ps-[2em] justify-center self-center flex-col  md:mt-0 relative">
            <div className="flex justify-between items-center gap-6">
              <div className="flex-col space-y-6">
                <Image
                  className=" max-w-full w-[40em] "
                  src={hero3.src}
                  alt="hero"
                />
                <Image
                  className=" max-w-full w-[40em] "
                  src={hero2.src}
                  alt="hero"
                />
              </div>
              <Image
                className=" max-w-full w-[40em] "
                src={hero1.src}
                alt="hero"
              />
            </div>
          </div>
        </FlexBox>
      </ContentBox>
    </div>
  );
};

export default Hero;
