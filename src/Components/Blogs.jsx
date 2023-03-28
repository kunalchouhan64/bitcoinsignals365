import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blogs = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div id='blogs' className='py-10 h-auto w-auto bg-gradient-to-r from-[#1A1A32] via-[#19042A] to-[#05001B] mb:h-auto mb:w-auto overflow-hidden'>
                <div className='flex justify-center items-center py-5'>
                    <h2 className='font-Poppins text-3xl text-[#22BBFD]'>Blogs</h2>
                </div>
                <div className='flex justify-evenly items-center py-6 mb:flex-col mb:px-5 mb:gap-8 lg:flex-row lg:px-0 lg:gap-0'>
                    {/* div 1  */}
                    <div data-aos="fade-up" data-aos-duration="1500" className='blogs_bg1 h-80 rounded-t-[2rem] border-2 border-[#DB00FF]'>
                        <div className='h-full flex justify-center items-end'>
                            <h2 className='font-Poppins bg-[#DB00FF] text-white py-4 text-center text-xl w-96 mb:w-auto mb:text-base lg:w-96 lg:text-xl mb:p-6'>what are cryptocurrency options</h2>
                        </div>
                    </div>
                    {/* div 2  */}
                    <div data-aos="fade-up" data-aos-duration="1500" className='blogs_bg2 h-80 rounded-t-[2rem] border-2 border-[#22BBFD]'>
                        <div className='h-full flex justify-center items-end'>
                            <h2 className='font-Poppins bg-[#22BBFD] text-white py-4  text-center text-xl w-96 mb:w-auto lg:text-xl lg:w-96 mb:text-base lg:py-3'>how to trade binance perpetual futures</h2>
                        </div>
                    </div>
                    {/* div 3 */}
                    <div data-aos="fade-up" data-aos-duration="1500" className='blogs_bg3 h-80 rounded-t-[2rem] border-2 border-[#8A36F3]'>
                        <div className='h-full flex justify-center items-end'>
                            <h2 className='font-Poppins bg-[#8A36F3] text-white py-4  text-center text-xl w-96 mb:w-auto mb:text-base lg:w-96 lg:text-xl mb:p-3'>how to trade crypto and forex signals</h2>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Blogs