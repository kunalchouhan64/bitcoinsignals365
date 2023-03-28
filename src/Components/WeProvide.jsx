import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const WeProvide = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <section id='services' className="py-8 h-auto bg-gradient-to-r from-[#1A1A32] via-[#19042A] to-[#05001B] overflow-hidden mb:h-auto mb:w-auto">
                <div className="flex justify-center items-center text-[#22BBFD] text-3xl font-semibold font-Poppins"
                >What We Offer</div>
                <div className="grid grid-cols-4 place-items-center gap-14 py-16 lg:px-20 mb:grid mb:grid-cols-1 mb:gap-10 mb:place-items-center mb:justify-items-center mb:py-10 mb:px-10 lg:py-16 lg:grid-cols-4 lg:gap-16">

                    <div data-aos="fade-right" data-aos-duration="1500" className="weofferdiv pt-5 bg-gradient-to-b from-[#090218] to-[#29086C] rounded-t-2xl flex flex-col justify-between items-center lg:h-[25rem] w-auto mb:h-auto mb:w-auto">
                        <img className="h-28" src="\Images\we_offer\customer.webp" alt="" />
                        <h2 className="w-1/2 text-2xl text-center text-[#D621F4] font-[500] font-Poppins mb:text-xl mb:font-semibold lg:text-2xl lg:font-[500]"
                        >24/7 Support</h2>
                        <p className="text-center w-72 text-white px-4 py-5 font-Poppins">We are always pleased to offer our clients comprehensive support and assistance. We assist with trade suggestions, market analyses, etc.</p>
                        <div className="h-2 w-full bg-gradient-to-r from-[#22BBFD] via-[#905EF8] to-[#e6d8e9]">

                        </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-duration="1500" className="weofferdiv pt-5 bg-gradient-to-b from-[#090218] to-[#29086C] rounded-t-xl flex flex-col justify-between items-center lg:h-[25rem] text-center mb:h-auto mb:w-auto">
                        <img className="h-28" src="\Images\we_offer\research.webp" alt="" />
                        <h2 className="w-1/2 text-2xl text-center text-[#D621F4] font-semibold lg:text-2xl mb:text-xl mb:font-semibold"
                        >Profitable Strategies</h2>
                        <p className="text-center w-72 text-white px-4 py-5 font-Poppins">In our 10+ years of experience we have designed profitable strategies in the market and execute only those strategies</p>
                        <div className="h-2 w-full bg-gradient-to-r from-[#22BBFD] via-[#905EF8] to-[#D621F4]">

                        </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-duration="1500" className="weofferdiv pt-5 bg-gradient-to-b from-[#090218] to-[#29086C] rounded-t-xl flex flex-col justify-between items-center lg:h-[25rem] mb:h-auto w-auto">
                        <img className="h-28" src="\Images\we_offer\explore.webp" alt="" />
                        <h2 className="w-1/2 text-2xl text-center text-[#D621F4] font-semibold mb:text-xl lg:text-2xl lg:font-[500] mb:font-semibold"
                        >Trading Plan</h2>
                        <p className="text-center w-72 text-white px-4 py-5 font-Poppins">We have a defined mechanism of entry and exit and in signals we provide reason for entering and exit</p>
                        <div className="h-2 w-full bg-gradient-to-r from-[#22BBFD] via-[#905EF8] to-[#D621F4]">

                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="1500" className="weofferdiv pt-5 bg-gradient-to-b from-[#090218] to-[#29086C] rounded-t-xl flex flex-col justify-between items-center lg:h-[25rem] text-center mb:h-auto mb:w-auto">
                        <img className="h-28" src="\Images\we_offer\cunsultanr.webp" alt="" />
                        <h2 className="w-1/2 text-2xl text-center text-[#D621F4] font-[500] font-Poppins mb:font-semibold mb:text-xl lg:text-2xl lg:font-[500]"
                        >AI signals</h2>
                        <p className="text-center w-72 text-white px-4 py-5 font-Poppins">Our AI tools helps us to recommend only those signals which has above 95% chances of being profitable </p>
                        <div className="h-2 w-full bg-gradient-to-r from-[#22BBFD] via-[#905EF8] to-[#D621F4]">

                        </div>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="1500" className="weofferdiv pt-5 bg-gradient-to-b from-[#090218] to-[#29086C] rounded-t-xl flex flex-col justify-between items-center lg:h-[25rem] mb:h-auto mb:w-auto">
                        <img className="h-28" src="\Images\we_offer\market.webp" alt="" />
                        <h2 className="w-1/2 text-2xl text-center text-[#D621F4] font-[500] font-Poppins mb:font-semibold mb:text-xl lg:font-[500] lg:text-2xl"
                        >Time Zones</h2>
                        <p className="text-center w-72 text-white px-4 py-5 font-Poppins">We provide signals according to clients time zone so different time zone clients will get signals as per their opted time zone</p>
                        <div className="h-2 w-full bg-gradient-to-r from-[#22BBFD] via-[#905EF8] to-[#D621F4]">

                        </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-duration="1500" className="weofferdiv pt-5 bg-gradient-to-b from-[#090218] to-[#29086C] rounded-t-xl flex flex-col justify-between items-center lg:h-[25rem] mb:h-auto mb:w-auto ">
                        <img className="h-28" src="\Images\we_offer\technical.webp" alt="" />
                        <h2 className="w-1/2 text-2xl text-center text-[#D621F4] font-[500] font-Poppins mb:text-xl mb:font-semibold lg:text-2xl lg:font-[500]"
                        >Various Signals</h2>
                        <p className="text-center w-72 text-white px-4 py-5 font-Poppins">Signals will be provided for intraday, swing and positional trading so as to minimise risk and maximise returns by allocating capital on various signals</p>
                        <div className="h-2 w-full bg-gradient-to-r from-[#22BBFD] via-[#905EF8] to-[#D621F4]">

                        </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-duration="1500" className="weofferdiv pt-5 bg-gradient-to-b from-[#090218] to-[#29086C] rounded-t-xl flex flex-col justify-between items-center lg:h-[25rem] mb:h-auto mb:w-auto">
                        <img className="h-28" src="\Images\we_offer\investment.webp" alt="img" />
                        <h2 className="w-1/2 text-2xl text-center text-[#D621F4] font-Poppins mb:text-xl lg:text-2xl lg:font-[500] mb:font-semibold"
                        >No Time Lag</h2>
                        <p className="text-center w-72 text-white px-4 py-5 font-Poppins">There will be no time lag in sending signals to you because we are using high speed API to deliver signals to you on a real time basis</p>
                        <div className="h-2 w-full bg-gradient-to-r from-[#22BBFD] via-[#905EF8] to-[#D621F4]">

                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="1500" className="weofferdiv pt-5 bg-gradient-to-b from-[#090218] to-[#29086C] rounded-t-xl flex flex-col justify-between items-center h-[25rem] mb:h-auto mb:w-auto lg:h-[25rem]">
                        <img className="h-28" src="\Images\we_offer\automated.webp" alt="" />
                        <h2 className="w-1/2 text-2xl text-center text-[#D621F4] font-[500] font-Poppins mb:text-xl mb:font-semibold lg:text-2xl lg:font-[500]"
                        >Replacement Guarantee</h2>
                        <p className="text-center w-72 text-white px-4 py-5 font-Poppins">If you have missed a signal then we will either give you a replacement with a new signal or extend your services for few more days</p>
                        <div className="h-2 w-full bg-gradient-to-r from-[#22BBFD] via-[#905EF8] to-[#D621F4]">

                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default WeProvide