"use client";
import React from "react";
import Herosection from "../../components/homepage/Herosection";
import About from "../../components/homepage/About";
import Service from "../../components/homepage/Service";
import Timeline from "../../components/homepage/Timeline";
import Readmore from "../../components/homepage/Readmore";
import Industry from "../../components/homepage/Industry";
import Partner from "../../components/homepage/Partner";
import Review from "../../components/homepage/Review";
import Question from "../../components/homepage/Question";
import Resource from "../../components/homepage/Resource";
import "bootstrap/dist/css/bootstrap.min.css";

// export const metadata = {
//   title: "Permanent Staffing Services Company, Recruitment Agency",
//   description:
//     "Discover premier permanent staffing company services tailored to your business needs. Connect with a permanent recruitment agency to find top talent effortlessly.",
// };
const Index = () => {
  return (
    <>
      <Herosection />
      <About />
      <Service />
      <Timeline />
      <Industry />
      <Partner />
      <Review />
      <Resource />
      <Question />
      {/* <Readmore/> */}
    </>
  );
};

export default Index;
