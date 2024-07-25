import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogData from "../../components/blogListing/BlogData";
import BlogSection from "../../components/blogListing/BlogSection";
import BlogQNS from "../../components/blogListing/BlogQNS";
import Resource from "../../components/blogListing/Resource";
// import Resourses from "../../components/blogListing/Resource"

export const metadata = {
  title: "Latest Blogs - Articles ,Guides,Interviews,Recent",
  description : "Discover the latest trends and insights in recruitment services on our blog. Stay updated with expert advice and industry news to enhance your hiring process."
};

const page = () => {
  return (
    <div>
      <BlogSection />
      <BlogData />
      <Resource/>
      {/* <BlogQNS /> */}
    </div>
  );
};

export default page;