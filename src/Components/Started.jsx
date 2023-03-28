
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Started = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <>
            <section className="h-auto  w-auto py-12 flex justify-between items-center weprovide lg:px-16 bg-gradient-to-r from-[#1A1A32] via-[#19042A] to-[#05001B] overflow-x-hidden mb:h-auto mb:w-auto mb:flex-col-reverse overflow-hidden lg:flex-row lg:py-12 mb:gap-5 lg:gap-0">
                <div data-aos="fade-right" data-aos-duration="1500" className="space-y-4 mb:px-10 lg:px-0">
                    <h2 className="text-4xl text-[#22BBFD] font-semibold w-[33rem] font-Poppins mb:text-xl mb:w-[20rem] lg:text-3xl lg:w-[35rem]">Over 65000+ percentage returns generated so far 
now it’s your turn to joining winning team
</h2>
                    <p className="text-2xl text-white font-[500] font-Poppins mb:text-lg mb:w-auto lg:text-2xl">Grasp the market insights with 
                        <span className="text-[#D621F4] pl-1">Bitcoinsignal365</span>
                    </p>
                    <p className="text-lg text-white w-[30rem] font-Poppins mb:w-auto mb:text-base lg:w-[30rem] lg:text-[1.1rem]">When it comes to crypto, you need more than just signals, count on us to provide you with everything you need</p>
                    <div className='space-y-3 mb:px-4 lg:px-0 mb:space-y-4'>
                        <p className="text-white text-lg font-[400] flex items-center space-x-2 font-Poppins mb:text-[1rem] mb:w-auto lg:text-lg mb:text-sm"
                        > <span><img src="\Images\check.webp" className='mb:h-5 mb:w-10 lg:w-auto lg:h-auto' alt="" /></span>
                            <span>Experienced market analyst will provide you trading signals. </span>
                        </p>
                        <p className="text-white text-lg font-[400] flex items-center space-x-2 font-Poppins   lg:text-lg mb:text-[1rem] mb:text-sm"
                        > <span><img src="\Images\check.webp" className='mb:h-5 mb:w-10 lg:w-auto lg:h-auto' alt="" /></span>
                            <span> Get real time updates on crypto coins and forex pairs movement. </span>
                        </p>
                        <p className="text-white text-lg font-[400] flex items-center space-x-2 font-Poppins  lg:text-lg mb:text-[1rem] mb:text-sm"
                        > <span><img src="\Images\check.webp" className='mb:h-5 mb:w-10 lg:w-auto lg:h-auto' alt="" /></span>
                            <span>Share your idea’s with other traders in our trading room.</span>
                        </p>
                        <div className="pt-8 mb:pt-6 lg:pt-10 ">
                            <Link to='/contact'
                                className="bg-gradient-to-r from-[#22BBFD] via-[#905EF8] to-[#D621F4] font-Poppins text-white py-3 px-10 rounded-[1rem] mb:py-2 mb:px-6 lg:py-3 lg:px-10 mb:border-cyan-300 mb:border-2 btn_hover">Get
                                Started</Link>
                        </div>

                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="1500" className="">
                    <img className="h-64 mb:h-auto lg:h-64" src="\Images\getstarted_img.webp" alt="img" />
                </div>
            </section>
        </>
    )
}

export default Started