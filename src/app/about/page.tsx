import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Bit Verge - Innovative IT Services and Solutions",
  description: "Learn about Bit Verge's comprehensive IT services, innovative solutions, and commitment to delivering cutting-edge technology for businesses of all sizes.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Discover how Bit Verge transforms businesses through innovative IT services and solutions. We're committed to delivering excellence in every project we undertake."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;