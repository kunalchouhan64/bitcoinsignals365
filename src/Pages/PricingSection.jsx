import React from 'react'
// import Footer from '../Components/Footer'
import HowWorks from '../Components/HowWorks'
import Pricing from '../Components/Pricing'
import Reviews from '../Components/Reviews'
import WeProvide from '../Components/WeProvide'
import ContactForm from './ContactForm'

const PricingSection = () => {
    return (
        <>
            <div className='pt-8 bg-gradient-to-r from-[#1A1A32] via-[#19042A] to-[#05001B] overflow-hidden'>
                <Pricing />
            </div>
            <WeProvide />
            <HowWorks />
            <div className='pb-10 bg-gradient-to-r from-[#1A1A32] via-[#19042A] to-[#05001B] '>
                <Reviews />
            </div>
            <ContactForm />
            {/* <Footer/> */}
        </>
    )
}

export default PricingSection