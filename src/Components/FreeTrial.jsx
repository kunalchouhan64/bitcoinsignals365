import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const FreeTrial = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div id='freetrial' className='h-auto w-full py-10 flex justify-center items-center bg-gradient-to-r from-[#1A1A32] via-[#19042A] to-[#05001B] overflow-hidden mb:px-7 mb:py-6'><div className='free_trial_bg lg:w-[70%] h-full rounded-2xl flex flex-col justify-center items-center mb:w-auto '>

                <div className='h-full rounded-[2rem] lg:py-16 flex flex-col justify-center items-center space-y-6 lg:w-full bg-[#07051e] bg-gradient-tob from-[#0A063D] to-[#570368] bg-opacity-80 shadow-md shadow-[#B925D6] mb:px-5 lg:px-0 mb:w-auto mb:px20 mb:py-10'>
                    <h2 className='font-Poppins text-[#22BBFD] text-3xl font-semibold w-[31rem] text-center z-50  mb:text-xl mb:w-auto lg:w-[31rem] lg:text-3xl'>Are You Ready To Take Your
                        Forex Trading To The Next Level? </h2>
                    <p className='text-white font-Poppins text-lg w-3/6 text-center mb:text-sm mb:w-auto lg:text-lg lg:w-3/6'>With a 7-day free trial you've got absolutely no reason not to give us a try.
                        You won't regret it.</p>
                    {/* <div data-aos="zoom-in" data-aos-duration="1500" className='flex justify-center items-center mb:flex-col mb:space-y-3 lg:flex-row lg:space-y-0'>
                        <input type="email" className='font-Poppins text-lg font-[300] lg:rounded-l-lg lg:rounded-r-none px-2 mb:py-1 mb:rounded-xl lg:py-2 lg:text-lg mb:text-base mb:px-3 mb:w-64' name="email" id="email" placeholder='Enter Your Email' />
                        <p className='py-[0.67rem] font-semibold px-3 font-Poppins text-white bg-[#22BBFD] lg:rounded-r-lg mb:rounded-lg mb:text-sm mb:py-2 lg:py-[0.67rem] lg:rounded-none lg:text-base'>Start 7 Day Free Trial</p>
                    </div> */}
                    <div className='space-x-16 pt-3 mb:space-x-5 lg:space-x-16 mb:w-auto'>
                        <Link to="/contact" data-aos="fade-up" data-aos-duration="1500" className='py-3 px-6 bg-gradient-to-r from-[#22BBFD] via-[#905EF8] to-[#D621F4] rounded-xl text-white border-2 border-[#22BBFD] font-Poppins text-lg mb:py-1 mb:px-3 mb:text-sm lg:py-2 lg:px-6 lg:text-lg'>Join Now</Link>
                        <a href='https://wa.me/447888873074?text=' rel='noreferrer' target='_blank' data-aos="fade-up" data-aos-duration="1500" className='py-2 px-6 bg-gradient-to-r from-[#22BBFD] via-[#905EF8] to-[#D621F4] rounded-xl text-white border-2 border-[#22BBFD] font-Poppins text-lg mb:py-1 mb:px-2 mb:text-sm lg:px-6 lg:py-2 lg:text-lg'>WhatsApp Now</a>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default FreeTrial