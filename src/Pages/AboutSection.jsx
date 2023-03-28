import React from 'react'
import About from '../Components/About'
import Brand from '../Components/Brand'
import Hero from '../Components/Hero'
import HowWorks from '../Components/HowWorks'
import ContactForm from './ContactForm'

const AboutSection = () => {
    return (
        <>
        <Hero/>
        <Brand/>
        <About/>
        <HowWorks/>
        <div className='py-8 bg-[#061034]'>
        <ContactForm/>
        </div>
        {/* <Footer/> */}
        </>
    )
}

export default AboutSection