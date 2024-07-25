import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CareerForm from "../../components/careerform/CareerForm"
import CareerSectionTwo from "../../components/careerform/CareerSectionTwo"
const page = () => {
  return (
    <div>
      <CareerSectionTwo/>
      <CareerForm/>
    </div>
  );
};

export default page;