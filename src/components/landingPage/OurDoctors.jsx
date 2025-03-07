"use client";
import Image from "next/image";
import ContentBox from "../ui/ContentBox";
import FlexBox from "../ui/FlexBox";
import SectionBg from "../ui/Section";
import MediH2 from "../ui/Typography/MediH2";
import SectionSubtitle from "../ui/Typography/SectionSubtitle";

import MediH5 from "../ui/Typography/MediH5";
import MediH6 from "../ui/Typography/MediH6";
import MediIcon from "../ui/Typography/MediIcon";
import MediButton from "../ui/MediButton";

const OurDoctors = () => {
  const arr = [1, 2, 3];
  return (
    <SectionBg>
      <ContentBox>
        {" "}
        <div className="text-center">
          <MediH2>Popular Doctors</MediH2>
          <SectionSubtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus, nec efficitur tortor ultricies. Nullam
          </SectionSubtitle>
          {/* TODO: add here carousel */}
          <div className="grid grid-cols-3 gap-[1em] mt-[3em]">
            {/* Doctor profile card */}
            {arr.map((i) => (
              <div className="border border-solid border-primary/30 p-[1.2em] rounded-lg group transition-all duration-300">
                <Image
                  src="/doctors/doc1.jpg"
                  alt="doctor"
                  width={300}
                  height={300}
                  className="w-full rounded-lg group-hover:scale-105 overflow-hidden transition-all"
                />
                <FlexBox className="justify-between items-center mt-3">
                  <div className="text-left">
                    <MediH5>Dr. John Doe</MediH5>
                    <MediH6>Cardiologist</MediH6>
                  </div>
                  <div className="space-x-1">
                    <MediIcon name={"star"} />
                    <MediIcon name={"star"} />
                    <MediIcon name={"star"} />
                    <MediIcon name={"star"} />
                    <MediIcon name={"star"} />
                  </div>
                </FlexBox>
                <div>
                  <MediButton
                    link={"#"}
                    text={"View details"}
                    className={"py-1 w-full mt-5"}
                  ></MediButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentBox>
    </SectionBg>
  );
};

export default OurDoctors;
