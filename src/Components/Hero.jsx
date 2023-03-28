import React  from 'react'
import { Link } from 'react-router-dom'
// import { useState } from 'react';
// import { useEffect } from 'react';

const Hero = () => {

    // const [show, SetShow] = useState(false)

    
    // useEffect(() => {
    //     setTimeout(() => {
    //         SetShow(true)
    //     }, 1000);

    // }, [])
    // const close = () => {
    //     SetShow(false)
    // }

    return (
        <>

            {/* {
                show ? <div className="modalPopup md:py-10 h-auto w-auto shadow-2xl shadow-sky-700 md:px-32 mb:mt-10 mb:w-auto mb:h-auto mb:px-0" id='mymodel'>

                    <div className="modalContent">
                        <div className="wrapper bg-yellow-400 h-auto w-auto flex justify-evenly md:py-32 md:px-10 mb:w-auto md:h-full md:w-full mb:py-32 mb:px-8">
                            <div className='font-Poppins text-xl'>Some Content</div>
                            <div className='font-Poppins text-xl'>Some Content</div>
                        </div>
                        <div className='pt-10 w-auto flex justify-center items-center'>
                            <button className="buttonStyle font-Poppins md:text-lg text-center md:px-8" onClick={close} id="button">Close</button>
                        </div>
                    </div>
                </div> : <div></div>

            } */}



            <div className="lg:h-[82vh] hero_background bg[#061034] w-full flex justify-between items-start  lg:px-24 mb:h-auto mb:flex-col-reverse lg:flex-row md:h-auto overflow-hidden">
                <div className="flex flex-col h-auto w-auto space-y-6 lg:pt-16 mb:pt-0 mb:px-5 mb:py-5 lg:px-0 lg:py-0">
                    <div className="space-y-0">
                        <h2 className="lg:text-6xl text[#22BBFD] font-bold font-Poppins mb:text-4xl hearo_heading py-2">BitcoinSignals 365
                        </h2>
                        <h2 className="lg:text-4xl text-[#22BBFD] mb:text-2xl lg:w-[33rem] lg:pt-2 mb:w-auto font-Poppins space-y-2  font-[400]"> <span className='text[#cb45c0] font-Poppins font-[400]'> 99.4% Accurate</span> Crypto and Forex Trading <span className='hearospan'> Signals </span></h2>
                    </div>
                    <div className="space-y-2 text-white font-[400] text-lg">
                        <p className="space-x-2 font-Poppins flex items-center mb:text-base lg:text-lg"> <span><img src="\Images\check.webp"
                            alt="" /></span> <span> AI Predicted Signals </span></p>
                        <p className="space-x-2 flex items-center font-Poppins mb:text-base lg:text-lg"> <span><img src="\Images\check.webp" alt="" /></span>
                            <span>Only low risk high reward signals</span></p>
                        <p className="space-x-2 flex items-center font-Poppins mb:text-base lg:text-lg"> <span><img src="\Images\check.webp" alt="" /></span>
                            <span>Only CFA and CMT Qualified research analyst</span></p>
                        <p className="space-x-2 flex items-center font-Poppins mb:text-base lg:text-lg"> <span><img src="\Images\check.webp" alt="" /></span>
                            <span> 24/7 Live Support</span></p>
                        <p className="space-x-2 flex items-center font-Poppins mb:text-base lg:text-lg"> <span><img src="\Images\check.webp" alt="" /></span>
                            <span> VIP and VVIP premium Signals</span></p>
                        <p className="space-x-2 flex items-center font-Poppins mb:text-base lg:text-lg"> <span><img src="\Images\check.webp" alt="" /></span>
                            <span>Learning plus earning</span></p>
                    </div>
                    <div className="lg:space-x-8 mb:flex mb:space-x-0 mb:gap-6 mb:w-auto lg:gap-0 ">
                        <button
                            className="py-3 px-6 bg-gradient-to-b from-[#f623f6] to-[#0d88bc] rounded-xl text-white border-2 border-[#22BBFD] font-Poppins text-lg mb:py-1 mb:px-2 lg:py-1 lg:px-5 mb:text-base btn_hover"
                        >
                            <Link to='/contact' >
                                Enquire
                                Now</Link></button>
                        <button
                            className="py-3 px-6 bg-gradient-to-b from-[#f623f6] to-[#0d88bc] rounded-xl text-white border-2 border-[#22BBFD] font-Poppins text-lg mb:py-1 mb:px-3 lg:py-3 lg:px-5 mb:text-base btn_hover"
                        >
                            <a href='https://wa.me/447888873074?text=' rel='noreferrer' target='_blank' >
                                WhatsApp
                                Now
                            </a></button>
                    </div>
                </div>

                <div className="bg-red500 mb:py-1 mb:px-5 lg:py-0 lg:px-0 "><img src="\Images\bull.png" className="h-[38rem]  md:h-[5rem] mb:h-auto mb:w-auto lg:h-[37rem]" alt="images" /></div>
            </div>
        </>
    )
}

export default Hero