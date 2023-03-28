import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Reviews = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div id='reviews' className='h-auto w-auto bg-gradient-to-r from-[#1A1A32] via-[#19042A] to-[#05001B] overflow-hidden'>
                <div className='flex justify-center items-center py-8'>
                    <h2 className='text-[#22BBFD] text-3xl font-Poppins font-[400]'>Reviews</h2>
                </div>


                <div className='flex justify-evenly items-center bg-gradient-to-r from-[#1A1A32] via-[#19042A] to-[#05001B] py-9 mb:flex-col mb:h-auto mb:py-5 mb:gap-10 mb:px-6 lg:flex-row lg:py-0 lg:gap-0 lg:px-0'>

                    <div data-aos="zoom-in" data-aos-duration="1500" className='bg-gradient-to-t rounded-2xl from-[#8A36F3] to-[#29086C] flex justify-center items-center flex-col py-5 px-4 space-y-3 shadow-md shadow-cyan-400 mb:px-5 lg:px-4'>
                        <img className='h-32 w-32 border-2 border-cyan-500 rounded-full' src="\Images\customer\review2.jfif" alt="" />
                        <h2 className='font-Poppins text-2xl text-[#D621F4] mb:text-xl mb:font-semibold lg:text-xl'>Mark Hazelwood</h2>
                        <p className='font-Poppins text-lg w-72 text-center text-white mb:w-full mb:text-sm lg:w-72 lg:text-base font-[300]'>The sheer determination and constant assistance that the team has provided me till now has helped to earn huge profits everytime.Thank You so much Trade World 24X7.</p>
                    </div>

                    <div data-aos="zoom-in" data-aos-duration="1500" className='bg-gradient-to-t rounded-2xl from-[#8A36F3] to-[#29086C] flex justify-center items-center flex-col py-5 px-4 space-y-3 shadow-md shadow-cyan-400 mb:px-5 lg:px-4'>
                    <img className='h-32 w-32 border-2 border-cyan-500 rounded-full' src="\Images\customer\review1.jpg" alt="" />
                        <h2 className='font-Poppins text-2xl text-[#D621F4] mb:text-xl mb:font-semibold lg:text-xl'>Aleena Williamson</h2>
                        <p className='font-Poppins text-lg w-72 text-center text-white mb:w-full mb:text-sm lg:w-72 lg:text-base font-[300]'>The research report provides the most accurate analysis and future predictions of the crypto market, and thus enhancing my crypto experience to its level best by providing a gem of advice.</p>
                    </div>

                    <div data-aos="zoom-in" data-aos-duration="1500" className='bg-gradient-to-t rounded-2xl from-[#8A36F3] to-[#29086C] flex justify-center items-center flex-col py-5 px-4 space-y-3 shadow-md shadow-cyan-400 mb:px-5 lg:px-4'>
                    <img className='h-32 w-32 border-2 border-cyan-500 rounded-full' src="\Images\customer\review3.jpg" alt="" />
                        <h2 className='font-Poppins text-2xl text-[#D621F4] mb:text-xl mb:font-semibold lg:text-2xl'>John Doe</h2>
                        <p className='font-Poppins text-lg w-72 text-center text-white mb:w-full mb:text-sm lg:text-base lg:w-72 font-[300]'>Outstanding signal quality. I am really amazed with the accuracy that you have provided so far. Trade World 24X7 is the best crypto advisory platform no doubt.</p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Reviews