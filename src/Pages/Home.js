import React from 'react'
import Brand from '../Components/Brand'
import Started from '../Components/Started'
import WeProvide from '../Components/WeProvide'
import Hero from '../Components/Hero'
import Pricing from '../Components/Pricing'
import Platform from '../Components/Platform'
import FreeTrial from '../Components/FreeTrial'
import CryptoSignals from '../Components/CryptoSignals'
import Stats from '../Components/Stats'
import HowWorks from '../Components/HowWorks'
import Strategy from '../Components/Strategy'
import About from '../Components/About'
import TradingBot from '../Components/TradingBot'
import Reviews from '../Components/Reviews'
import Blogs from '../Components/Blogs'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <>
            <Hero />
            <Brand />
            <Started />
            <WeProvide />
            <Pricing />
            <Platform />
            <FreeTrial />
            <CryptoSignals/>
            <Stats/>
            <HowWorks/>
            <Strategy/>
            <About/>
            <TradingBot/>
            <Reviews/>
            <Blogs/>
            <Footer/>
            
        </>
    )
}

export default Home