import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogData from "../../../components/bogdetails/BlogData";
import BlogSection from "../../../components/bogdetails/BlogSection";

const page = () => {
  return (
    <div>
      <BlogSection />
      <BlogData />
    </div>
  );
};

export default page;
