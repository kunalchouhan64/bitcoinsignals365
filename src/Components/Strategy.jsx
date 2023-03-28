import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Strategy = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className='pt-6 bg-gradient-to-r from-[#2a035a] to-[#120622] h-auto w-auto overflow-hidden'>
                <div className='flex justify-between items-center h-auto w-auto pt-7 bg-gradient-to-r from-[#2a035a] to-[#120622] mb:flex-col-reverse lg:flex-row'>
                    <div data-aos="fade-up" data-aos-duration="1500" className='space-y-6 pl-32 w-[50rem] mb:w-auto mb:pl-0 mb:px-5 mb:py-5 mb:space-y-3 lg:pl-32 lg:w-[50rem] lg:px-0 lg:py-0 lg:space-y-10'>
                        <h2 className='text-[#22BBFD] font-Poppins text-4xl font-semibold w-[86%] mb:w-auto mb:text-xl mb:pl-4 lg:w-[86%] lg:text-4xl lg:pl-0'>Accurate Trading Analysis to Help You Master Profitable Trading Strategies</h2>
                        <div className=' flex pt-10 justify-start flex-col items-start space-y-7 w-[30rem] mb:w-auto mb:px-3 mb:py-5 lg:w-[30rem] lg:px-0 lg:py-0'>
                            <p className='flex space-x-3 justify-center items-start font-Poppins text-white text-lg mb:text-sm lg:text-lg'><span><img  src="\Images\tick.png" alt="" /></span><span>We provide an in-depth evaluation of the trades we have executed</span></p>
                            <p className='flex justify-center space-x-3 items-start font-Poppins text-white text-lg mb:text-sm lg:text-lg'><span><img className='h-9' src="\Images\tick.png" alt="" /></span><span>We simplify many complicated strategies</span></p>
                            <p className='flex space-x-3 justify-center items-start font-Poppins text-white text-lg mb:text-sm lg:text-lg'><span><img src="\Images\tick.png" alt="" /></span><span>You will have access to the entire trading strategy of bitcoinsignals365.com</span></p>
                            
                        </div>
                    </div>
                    <div className=''>
                        <img data-aos="zoom-in" data-aos-duration="1500" className='h-[34rem] w-auto mb:h-auto lg:h-[34rem]' src="\Images\stretegy_img.webp" alt="img" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Strategy