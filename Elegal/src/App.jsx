import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ExpertiseSection from './components/ExpertiseSection'
import WhyUs from './components/WhyUs'
import Footer from './components/Footer'
import SearchPage from './components/SearchPage'
import LawyerRegistration from './components/LawyerRegistration'

function App() {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <ExpertiseSection/>
      <WhyUs/>
      <Footer/>
      <SearchPage/>
      <LawyerRegistration/>
    </div>
  )
}

export default App
