import React from 'react'
import AboutSection from '../../components/about/AboutSection'
import AboutUs from '../../components/about/AboutUs'
import Counters from '../../components/about/Counters'
import MisionAndVision from '../../components/about/MisionAndVision'
import AboutQNA from '../../components/about/AboutQNA'
import 'bootstrap/dist/css/bootstrap.min.css';


export const metadata = {
  title: "About - Study How We Incline Job Finders With Their Perfect Fit",
  description : "Learn how AschPro connects top talent with leading recruiters. Discover our missions, vision and our personalised approach to find your perfect career match."
};


const About_us = () => {

  return (
    <>
<AboutSection/>
<AboutUs/>
<Counters/>
<MisionAndVision/>
<AboutQNA/>
    </>
  )
}

export default About_us