import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Careertable from "../../components/career/Careertable";
import CareeSection from "../../components/career/CareerSection";
import CareerQNA from "../../components/career/careerQNA";

export const metadata = {
  title: "Careers - Aschpro",
  description:
    "Explore exciting career opportunities at Aschpro! Join our team and drive innovation in a dynamic, growth-oriented environment. Your future starts here!",
};

const page = () => {
  return (
    <div>
      <CareeSection />
      <Careertable />
      <CareerQNA />
    </div>
  );
};

export default page;
