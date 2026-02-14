import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Somos from '../sections/Somos'
import Servicios from '../sections/Servicios'
import Logos from '../sections/Logos'
import Footer from '../components/Footer'
import DigitalSection from '../sections/DigitalSection'

const Index = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Somos/>
      <Servicios/>
      <DigitalSection/>
      <Logos/>
      <Footer/>
    </div>
  )
}

export default Index
