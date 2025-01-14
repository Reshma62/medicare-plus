"use client";

import { Image } from "@nextui-org/react";
import FlexBox from "../ui/FlexBox";
import heroImage from "../../../public/hero/heroimag.svg";
import MediButton from "../ui/MediButton";

const Hero = () => {
  return (
    <div className="bg-secondary-gradient font-openSans py-20">
      <div className="container ">
        <FlexBox>
          <div className="2xl:max-w-[50%]  w-full">
            <h1 className="font-bold text-3xl sm:text-5xl tablet:text-[75px] max-w-full !leading-normal relative">
              Caring for{" "}
              <span className="relative inline-block text-primary">
                Health
                <span className="underline"></span>
              </span>{" "}
              Caring for You
            </h1>

            <p className="text-secondary text-base md:text-lg py-5">
              A brief statement outlining the purpose and mission of the clinic.
              This can include the commitment to patient care, community health.
            </p>
            <MediButton
              link={"/"}
              text={"Discover More"}
              className={"uppercase px-9"}
            />
          </div>
          <div className="flex justify-end self-end flex-col ">
            <Image className="top-20" src={heroImage.src} alt="hero" />
          </div>
        </FlexBox>
      </div>
    </div>
  );
};

export default Hero;
