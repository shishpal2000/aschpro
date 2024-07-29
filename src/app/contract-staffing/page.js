import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceSection from "../../components/contract_service/ServiceSection"
import Contract from "../../components/contract_service/Contract"
import Permanent from "../../components/contract_service/Permanent"
import Rpo from "../../components/contract_service/Rpo";
import Choose from "../../components/contract_service/Choose"
import Readmore from '@/components/contract_service/Readmore';
const page = () => {
  return (
    <div>
      <ServiceSection/>
      <Contract/>
      <Choose/>
      <Readmore/>
    </div>
  )
}

export default page;