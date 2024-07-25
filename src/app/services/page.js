import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceSection from "../../components/services/ServiceSection"
import Contract from "../../components/services/Contract"
import Permanent from "../../components/services/Permanent"
import Rpo from "../../components/services/Rpo"
import Readmore from '@/components/services/Readmore';

export const metadata = {
  title: "Services - AschPro Services: Contract, Permanent Staffing & RPO",
  description : "Discover our comprehensive recruitment solutions like contract staffing, permanent placement, and RPO services. Find the right talent for your business.."
};
const page = () => {
  return (
    <div>
      <ServiceSection/>
      <Contract/>
      <Permanent/>
      {/* <Rpo/> */}
      <Readmore/>
    </div>
  )
}

export default page