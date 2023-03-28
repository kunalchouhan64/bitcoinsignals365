import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Brand = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>

            <div className="h-auto py-3 bg-[#18185A] flex justify-evenly items-center mb:grid mb:grid-cols-2 mb:place-items-center lg:flex overflow-hidden mb:py-5 mb:gap-5">
                <img data-aos="fade-right" data-aos-duration="1000" className="h-[4.6rem] mb:h-10 lg:h-[4rem]" src="./Images/hero_brand/binance.webp" alt="" />
                <img data-aos="zoom-in" data-aos-duration="1000" className="h-10 mb:h-5 lg:h-8" src="./Images/hero_brand/coinbase.webp" alt="" />
                <img data-aos="zoom-in" data-aos-duration="1000" className="h-11 mb:h-6 lg:h-8" src="./Images/hero_brand/kraken.webp" alt="" />
                <img data-aos="fade-left" data-aos-duration="1000" className="h-14 mb:h-7 lg:h-12" src="./Images/hero_brand/blockchain.webp" alt="" />
            </div>
            <div className="h-2 w-full bg-gradient-to-r from-[#22BBFD] via-[#905EF8] to-[#D621F4]">

            </div>
        </>
    )
}

export default Brand