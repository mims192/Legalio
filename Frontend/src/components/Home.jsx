import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import ExpertiseSection from './ExpertiseSection'
import WhyUs from './WhyUs'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ExpertiseSection/>
      <WhyUs/>
      <Footer/>
    </div>
  )
}

export default Home
