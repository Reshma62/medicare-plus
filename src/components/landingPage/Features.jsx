"use client";

import { Card, CardBody, CardHeader } from "@heroui/react";
import FlexBox from "../ui/FlexBox";
import MediH2 from "../ui/Typography/MediH2";
import SectionBg from "../ui/Section";
import SectionSubtitle from "../ui/Typography/SectionSubtitle";
import MediIcon from "../ui/Typography/MediIcon";
import MediH4 from "../ui/Typography/MediH4";
import BodyText from "../ui/Typography/BodyText";
import ContentBox from "../ui/ContentBox";

const Features = () => {
  return (
    <SectionBg useGradient={false}>
      <ContentBox>
        <div className="text-center">
          <MediH2>Our Features</MediH2>
          <SectionSubtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus, nec efficitur tortor ultricies. Nullam
          </SectionSubtitle>
          <FlexBox className="gap-6 mt-12 ">
            <Card className="justify-center text-primary p-[1.5em]  w-full">
              <CardHeader className="items-center justify-center">
                <MediIcon name="calendar" size="2xl" />
              </CardHeader>
              <CardBody className=" pt-0 justify-center text-center space-y-3">
                <MediH4>Manage Your Schedule Effortlessly</MediH4>
                <BodyText>
                  Set your availability, manage appointments, and focus on what
                  matters most—your patients.
                </BodyText>
              </CardBody>
            </Card>
            <Card className="justify-center text-primary p-[1.5em]  w-full">
              <CardHeader className="items-center justify-center">
                <MediIcon name="discover" size="2xl" />
              </CardHeader>
              <CardBody className=" pt-0 justify-center text-center space-y-3">
                <MediH4>Find the Right Doctor <br/> Easily</MediH4>
                <BodyText>
                  Search, compare, and book appointments with trusted doctors in
                  just a few clicks.
                </BodyText>
              </CardBody>
            </Card>
            <Card className="justify-center text-primary p-[1.5em]  w-full">
              <CardHeader className="items-center justify-center">
                <MediIcon name="shield-plus" size="2xl" />
              </CardHeader>
              <CardBody className=" pt-0 justify-center text-center space-y-3">
                <MediH4>Secure Medical History Access</MediH4>
                <BodyText>
                  Doctors can update and share medical records securely, while
                  patients can access their history anytime.
                </BodyText>
              </CardBody>
            </Card>
          </FlexBox>
        </div>
      </ContentBox>
    </SectionBg>
  );
};

export default Features;
