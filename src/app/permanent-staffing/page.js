import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceSection from "../../components/permanent_service/ServiceSection"
import Contract from "../../components/permanent_service/Contract"
import Permanent from "../../components/permanent_service/Permanent"
import Rpo from "../../components/permanent_service/Rpo"
import Choose from "../../components/permanent_service/Choose"
import Readmore from '../../components/permanent_service/Readmore';
const page = () => {
  return (
    <div>
      <ServiceSection/>
      <Permanent/>
      <Choose/>
      <Readmore/>
    </div>
  )
}

export default page