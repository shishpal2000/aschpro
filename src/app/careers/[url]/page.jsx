import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import JobSection from "../../../components/jobdetails/JobSection"
import JobData from "../../../components/jobdetails/JobData"

const page = () => {
  return (
    <div>

     <JobSection/>
     <JobData/>
    </div>
  );
};

export default page;