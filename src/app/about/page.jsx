import React from "react";
import AboutSection from "../../components/about/AboutSection";
import AboutUs from "../../components/about/AboutUs";
import Counters from "../../components/about/Counters";
import MisionAndVision from "../../components/about/MisionAndVision";
import AboutQNA from "../../components/about/AboutQNA";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "About Us - Aschpro",
  description:
    "Discover AschPro - your go-to staffing agency for top-tier talent and personalized service. Elevate your team today with our expert recruitment solutions!",
};

const About_us = () => {
  return (
    <>
      <AboutSection />
      <AboutUs />
      <Counters />
      <MisionAndVision />
      <AboutQNA />
    </>
  );
};

export default About_us;
