import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Platform = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className='h-auto flex justify-between items-center px-20 py-14 bg-gradient-to-r from-[#1A1A32] via-[#19042A] to-[#05001B] w-auto overflow-hidden mb:h-auto mb:w-auto mb:py-10 mb:flex-col-reverse mb:px-5 lg:px-20 lg:py-14 lg:flex-row'>
                <div data-aos="fade-right" data-aos-duration="1500" className='space-y-7 mb:px-1 mb:w-auto'>

                    <h3 className='text-4xl font-semibold text-[#22BBFD] font-Poppins w-[37rem] mb:text-2xl mb:w-auto lg:text-4xl lg:w-[37rem]'>Study the MT4 and MT5 Trading Platform to become a trader</h3>
                    <p className='font-Poppins text-xl font-[300] w-[40rem] text-white mb:w-auto mb:text-base lg:text-xl lg:w-[40rem]'>Learning how to use the two most often used online trading platforms (MT4 and MT5) will be intimidating and perplexing if you're just starting out in trading.</p>
                    <p className='font-Poppins text-xl font-[300] text-white w-[40rem] mb:w-auto mb:text-base lg:text-xl lg:w-[40rem]'>Let our team of knowledgeable market analysts show you how to interpret your MT4/MT5 charts and use trading indicators and methods.</p>
                </div>
                <div className='mb:py-8'>
                    <img data-aos="zoom-in" data-aos-duration="1500" className='h-[30rem] mb:h-auto lg:h-[30rem]' src="\Images\trade_platform_img.webp" alt="" />
                </div>
            </div>
        </>
    )
}

export default Platform