import { Divider, Image } from "@nextui-org/react";
import { footerQuickLinksItem } from "../data/NavItem";
import FooterMenu from "./Footer/FooterMenu";
import mediCareLogo from "../../../public/header/medicarelogo.svg";
import FlexBox from "../ui/FlexBox";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-primary-gradient text-white p-4">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4">
          <div>
            <Image
              src={mediCareLogo.src}
              alt="MedicarePlus"
              width={150}
              height={50}
            />
          </div>
          <FooterMenu title={"Quick Links"} navItems={footerQuickLinksItem} />
          <FooterMenu title={"Department"} navItems={footerQuickLinksItem} />
          <FooterMenu title={"Useful Links"} navItems={footerQuickLinksItem} />
        </div>
        <Divider className="my-4  bg-white" />
        <FlexBox>
          <small className="">
            Copyright ©2023 MediCare.com. All Rights Reserved
          </small>
          <small>
            Design & Developed by{" "}
            <Link
              className="font-bold"
              href="https://developer-reshma-khanam.netlify.app/"
            >
              Reshma Khanam
            </Link>
          </small>
        </FlexBox>
      </div>
    </footer>
  );
};

export default Footer;
