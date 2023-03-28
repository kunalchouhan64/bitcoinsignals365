import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div id='aboutus' className='h-auto bg-gradient-to-r from-[#1A1A32] via-[#19042A] to-[#05001B] py-10 w-auto flex justify-evenly items-center mb:h-auto mb:w-auto mb:flex-col-reverse mb:gap-5 mb:px-3 lg:flex-row lg:gap-0 lg:px-0 overflow-hidden'>
                <div><img data-aos="zoom-in" data-aos-duration="1500" className='h-[27rem] mb:h-auto lg:h-[27rem]' src="\Images\about_img.webp" alt="AboutImage" /></div>
                <div data-aos="fade-left" data-aos-duration="1500" className='space-y-6 mb:px-6 lg:px-0'>
                    <h2 className='text-4xl font-[500] font-Poppins text-[#22BBFD] mb:text-3xl lg:text-4xl'>About Us</h2>
                    <p className='font-Poppins font-[300] text-lg w-[35rem] text-white mb:w-auto mb:text-sm lg:w-[35rem] lg:text-lg'>Established in 2015, at Bitcoinsignals365, we realize it takes a great deal of involvement, botches, moderate information in financial matters and difficult work to find success as a forex and crypto trader.
                        <br />
                        <br />
                        Our vision and mission, as a group of more than twenty professional traders with experience on Cyrpto and Forex Trading, is to help you lay the right foundation for success and simplify and shorten your learning curve.</p>
                </div>
            </div>
        </>
    )
}

export default About