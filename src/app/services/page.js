import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ServiceSection from "../../components/services/ServiceSection";
import Contract from "../../components/services/Contract";
import Permanent from "../../components/services/Permanent";
import Rpo from "../../components/services/Rpo";
import Readmore from "@/components/services/Readmore";

export const metadata = {
  title: "Staffing Company, Staffing Services, Staff Hiring Services",
  description:
    "Discover top staffing company to streamline your staff hiring services to find the best talent. Elevate your business with our staffing services. Explore now!",
};
const page = () => {
  return (
    <div>
      <ServiceSection />
      <Contract />
      <Permanent />
      {/* <Rpo/> */}
      <Readmore />
    </div>
  );
};

export default page;
