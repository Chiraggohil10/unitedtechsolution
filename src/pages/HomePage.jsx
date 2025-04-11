import React from 'react'
import Hero from '../Components/Hero/Hero'
import WhyUts from '../Components/WhyUTS/WhyUts'
import HowWork from '../Components/HowWork'
import FreeConstultant from '../Components/FreeConstultant'
import Services from '../Components/Services'
import Careers from '../Components/Careers.jsx'
import Counters from '../pages/Counters'
import Technology from '../Components/Technology'

function HomePage() {
  return (
        <>
            <Hero/>
            <WhyUts/>
            <HowWork/>
            <Technology/>
            <FreeConstultant/>
            <Services/>
            <Counters/>
            <Careers/> 
        </>
  )
}

export default HomePage