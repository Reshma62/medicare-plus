"use client";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const LandingPageLayout = ({ children }) => {
  return (
    <div id="/#home">
      <Navbar />
      <main className="font-openSans">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
