import React from 'react'
import Footer from '../Components/Footer'
import HowWorks from '../Components/HowWorks'
import Platform from '../Components/Platform'
import Started from '../Components/Started'
import WeProvide from '../Components/WeProvide'
import ContactForm from './ContactForm'
import Pricing from '../Components/Pricing'

const ServicesSection = () => {
  return (
    <>
    <Started/>
    <WeProvide/>
    <Pricing/>
    <Platform/>
    <HowWorks/>
    <div className='py-8 bg-[#061034]'>
    <ContactForm/>
    </div>
    
    <Footer/>
    </>
  )
}

export default ServicesSection