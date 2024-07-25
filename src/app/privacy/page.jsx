import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import PrivacySection from '../../components/Privacy/PrivacySection';
import PrivacyContent from "../../components/Privacy/PrivacyContent"


export const metadata = {
  title: "Privacy Policy | Aschpro",
  description : "Welcome to Aschpro. We value your privacy and are dedicated to preserving the security of your personal data."
};
const page = () => {
  return (
    <div>
      <PrivacySection/>
      <PrivacyContent/>
    </div>
  )
}

export default page
