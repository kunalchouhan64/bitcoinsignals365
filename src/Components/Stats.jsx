import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Stats = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className='stats_bg h-64 overflow-hidden mb:h-auto lg:h-64'>
                <div className='h-full flex justify-evenly items-center bg-[#07051e] bg-opacity-70 mb:flex-col mb:space-y-8 mb:py-10 lg:flex-row lg:space-y-0 lg:py-0'>
                    <div className='text-center space-y-2'>
                        <p data-aos="zoom-in" data-aos-duration="1500" className='text-white font-Poppins text-5xl mb:text-4xl lg:text-5xl'>8+</p>
                        <p data-aos="zoom-in" data-aos-duration="1500" className='font-Poppins text-2xl text-[#D621F4] mb:text-xl lg:text-2xl'> Year of Experience</p>
                    </div>
                    <div className='text-center space-y-2'>
                        <p data-aos="zoom-in" data-aos-duration="1500" className='text-white font-Poppins text-5xl mb:text-4xl lg:text-5xl'>10,500+</p>
                        <p data-aos="zoom-in" data-aos-duration="1500" className='font-Poppins text-2xl text-[#D621F4] mb:text-xl lg:text-2xl'> Traders Helped</p>
                    </div>
                    <div className='text-center space-y-2'>
                        <p data-aos="zoom-in" data-aos-duration="1500" className='text-white font-Poppins text-5xl mb:text-4xl lg:text-5xl'>50+</p>
                        <p data-aos="zoom-in" data-aos-duration="1500" className='font-Poppins text-2xl text-[#D621F4] mb:text-xl lg:text-2xl'> AI Tools Deployed</p>
                    </div>
                    <div className='text-center space-y-2'>
                        <p data-aos="zoom-in" data-aos-duration="1500" className='text-white font-Poppins text-5xl mb:text-4xl lg:text-5xl'>12M+</p>
                        <p data-aos="zoom-in" data-aos-duration="1500" className='font-Poppins text-2xl text-[#D621F4] mb:text-xl lg:text-2xl'> Profit Generated</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Stats