"use client";

import { Card, CardBody, CardHeader } from "@heroui/react";
import FlexBox from "../ui/FlexBox";
import MediH2 from "../ui/MediH2";
import SectionBg from "../ui/Section";
import SectionSubtitle from "./SectionSubtitle";
import MediIcon from "../ui/MediIcon";
import MediH4 from "../ui/MediH4";
import BodyText from "./BodyText";

const Features = () => {
  return (
    <SectionBg useGradient={false}>
      <div className="container text-center">
        <MediH2>Our Features</MediH2>
        <SectionSubtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus, nec efficitur tortor ultricies. Nullam
        </SectionSubtitle>
        <FlexBox className="gap-6 mt-12">
          <Card className="justify-center text-primary py-6">
            <CardHeader className="items-center justify-center">
              <MediIcon name="calendar" size="2xl" />
            </CardHeader>
            <CardBody className="px-[1.8em] pt-0 justify-center text-center space-y-3">
              <MediH4>Manage Your Schedule Effortlessly</MediH4>
              <BodyText>
                Set your availability, manage appointments, and focus on what
                matters most—your patients.
              </BodyText>
            </CardBody>
          </Card>
          <Card className="justify-center text-primary py-6">
            <CardHeader className="items-center justify-center">
              <MediIcon name="discover" size="2xl" />
            </CardHeader>
            <CardBody className="px-[1.8em] pt-0 justify-center text-center space-y-3">
              <MediH4>Find the Right Doctor Easily</MediH4>
              <BodyText>
                Search, compare, and book appointments with trusted doctors in
                just a few clicks.
              </BodyText>
            </CardBody>
          </Card>
          <Card className="justify-center text-primary py-6">
            <CardHeader className="items-center justify-center">
              <MediIcon name="shield-plus" size="2xl" />
            </CardHeader>
            <CardBody className="px-[1.8em] pt-0 justify-center text-center space-y-3">
              <MediH4>Secure Medical History Access</MediH4>
              <BodyText>
                Doctors can update and share medical records securely, while
                patients can access their history anytime.
              </BodyText>
            </CardBody>
          </Card>
        </FlexBox>
      </div>
    </SectionBg>
  );
};

export default Features;
