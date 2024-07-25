import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import TermsSection from '../../components/Terms/TermsSection';
import TermsContent from "../../components/Terms/TermsContent"

export const metadata = {
  title: "Terms And Conditons | Ascpro ",
  description : "Aschpro terms and conditions for the recruitment services we offer to our clients and jobseekers."
};
const page = () => {
  return (
    <div>
      <TermsSection/>
      <TermsContent/>
    </div>
  )
}

export default page