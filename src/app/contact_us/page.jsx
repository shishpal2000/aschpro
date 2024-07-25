import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainsection from '../../components/contactus/Mainsection'
import ContactForm from '../../components/contactus/ContactForm'
import ContactQuestion from "../../components/contactus/ContactQuestion"

export const metadata = {
  title: "Contect Us - Contact Aschpro Recruitment Today and secure your dream job",
  description : "Need assistance with your job search or hiring process? Contact AschPro recruitment today. Our recruitment experts are ready to help you find the perfect match."
};

const page = () => {
  return (
    <div>
      <Mainsection/>
      <ContactForm/>
      <ContactQuestion/>
    </div>
  )
}

export default page