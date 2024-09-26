import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogData from "../../components/blogListing/BlogData";
import BlogSection from "../../components/blogListing/BlogSection";
// import BlogQNS from "../../components/blogListing/BlogQNS";
import Resource from "../../components/blogListing/Resource";
// import Resourses from "../../components/blogListing/Resource"

export const metadata = {
  title: "Blogs - Aschpro",
  description:
    "Discover insightful blogs on trends, tips, & more. Boost your knowledge with our expertly crafted articles on hiring. Read now for the latest updates!",
};

const page = () => {
  return (
    <div>
      <BlogSection />
      <BlogData />
      <Resource />
      {/* <BlogQNS /> */}
    </div>
  );
};

export default page;
