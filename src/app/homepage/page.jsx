
import React from 'react'
import Herosection from '../../components/homepage/Herosection'
import About from '../../components/homepage/About'
import Service from '../../components/homepage/Service'
import Timeline from '../../components/homepage/Timeline'
import Readmore from '../../components/homepage/Readmore'
import Industry from '../../components/homepage/Industry'
import Partner from '../../components/homepage/Partner'
import Review from '../../components/homepage/Review'
import Question from '../../components/homepage/Question'
import Resource from '../../components/homepage/Resource'
import 'bootstrap/dist/css/bootstrap.min.css';

// export const metadata = {
//   title: "Aschpro - Find Your Dream Job With Aschpro and Secure Your Future",
//   description : "Discover top career opportunities across various industries and connect with talented professionals and leading employers. Start your job search today!"
// };

const Index = () => {
  return (
    <>
    
    <Herosection/>
    <About/>
    <Service/>
    <Timeline/>
    <Industry/>
    <Partner/>
    <Review/>
    <Resource/>
    <Question/>
    {/* <Readmore/> */}

    </>
  )
}

export default Index