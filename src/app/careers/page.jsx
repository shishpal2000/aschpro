import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Careertable from '../../components/career/Careertable'
import CareeSection from '../../components/career/CareerSection'
import CareerQNA from '../../components/career/careerQNA'

export const metadata = {
  title: "Careers - Exciting Career Opportunities with Aschpro Job Opportunities",
  description : "Discover the best rewarding job openings across various industries. Apply now to join our talented team and take the next step in your career journey."
};

const page = () => {
  return (
    <div>
      <CareeSection/>
      <Careertable/>
      <CareerQNA/>
    </div>
  )
}

export default page