import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TermsSection from "../../components/Terms/TermsSection";
import TermsContent from "../../components/Terms/TermsContent";

export const metadata = {
  title: "Terms And Conditions - Aschpro",
  description:
    "Explore Aschpro's comprehensive Terms and Conditions. Ensure clarity and transparency in all dealings. Your trust and compliance matter to us!",
};
const page = () => {
  return (
    <div>
      <TermsSection />
      <TermsContent />
    </div>
  );
};

export default page;
