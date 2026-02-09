import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Somos from '../components/Somos'
import Servicios from '../components/Servicios'
import Logos from '../components/Logos'

const Index = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Somos/>
      <Servicios/>
      <Logos/>
    </div>
  )
}

export default Index
