import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const CryptoSignals = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <section className='h-auto w-auto bg-gradient-to-r from-[#1A1A32] via-[#19042A] to-[#05001B] py-10 overflow-hidden mb:h-auto mb:w-auto mb:px-5'>
                <div className='text-center flex justify-center items-center'>
                    <h2 className='font-Poppins text-4xl text-[#22BBFD] w-3/6 font-semibold text-center mb:text-xl mb:w-auto lg:text-3xl lg:w-3/6'>Crypto and Forex Signals for Beginners at Bitcoinsignals365</h2>
                </div>
                <div className='flex justify-evenly items-center h-auto w-auto py-10 mb:flex-col-reverse lg:flex-row mb:py-4'>
                    <div data-aos="fade-right" data-aos-duration="1500" className='space-y-6'>
                        <h2 className='text-[#D621F4] font-Poppins text-3xl font-semibold mb:text-2xl lg:text-3xl'>Interpret The Market</h2>
                        <p className='font-Poppins text-xl font-[300] w-[37rem] text-white mb:w-auto mb:text-sm lg:w-[37rem] lg:text-lg'>Are you interested in trading cryptocurrencies or Forex like Bitcoin, Ethereum, Ripple, USD/JPY, EUR/USD and GBP/USD etc but are unsure of how the market functions?
                        </p>
                        <p className='font-Poppins text-xl font-[300] text-white w-[37rem] mb:w-auto mb:text-sm lg:w-[37rem] lg:text-lg'>If that's the case, you should be aware that experienced traders have spent years mastering the art of technical analysis. This entails doing in-depth analysis of the trends in cryptocurrency pricing using a wide range of indicators. Consider RSI, MACD, Moving Averages, and other indicators.</p>
                    </div>
                    <div className='mb:py-4 lg:py-0'>
                        <img data-aos="zoom-in" data-aos-duration="2000" className='h-[27rem] mb:h-auto mb:w-auto lg:h-[27rem]' src="\Images\cryoto\market.webp" alt="img" />
                    </div>

                </div>


                <div className='flex justify-evenly items-center h-auto w-auto py-7 mb:flex-col mb:py-0 lg:flex-row'>
                    <div className='mb:py-4 lg:py-0'>
                        <img data-aos="zoom-in" data-aos-duration="2000" className='h-[27rem] mb:h-auto lg:h-[27rem]' src="\Images\cryoto\skills.webp" alt="img" />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500" className='space-y-6'>
                        <h2 className='text-[#D621F4] font-Poppins text-3xl font-semibold mb:text-2xl mb:w-auto lg:text-3xl lg:w-4/6'>Gain Traders Skill Set</h2>
                        <p className='font-Poppins text-xl font-[300] w-[36rem] text-white mb:w-auto mb:text-sm lg:w-[37rem] lg:text-lg'>The fact is that you will find it difficult to consistently generate money in the cryptocurrency or Forex trading market if you lack the skill set necessary to conduct extensive technical research. Instead, there's a good possibility you'll spend all the money in your account. As a result, you can trade on the cryptocurrency or Forex markets without having to do any labour.

                        </p>
                        <p className='font-Poppins text-xl font-[300] text-white w-[36rem] mb:w-auto mb:text-sm lg:w-[37rem] lg:text-lg'>But, we should also keep in mind that our crypto signals are appropriate for experienced traders as well. Instead, you might simply lack the time to conduct market research. As a result, traders of all skill levels can benefit from Bitcoinsignals365.com</p>
                    </div>


                </div>

                <div className='flex justify-evenly items-center h-auto w-auto py-7 mb:flex-col-reverse lg:flex-row mb:py-0'>
                    <div data-aos="fade-right" data-aos-duration="1500" className='space-y-6'>
                        <h2 className='text-[#D621F4] font-Poppins text-3xl font-semibold mb:text-2xl lg:text-3xl'>Making profit</h2>
                        <p className='font-Poppins text-xl font-[300] w-[36rem] text-white mb:w-auto mb:text-sm lg:w-[36rem] lg:text-lg'>In this case, Bitcoinsignals365.com can be useful. Our cryptocurrency and forex signals will inform you of all you need to know to trade cautiously, as we go into more detail about this further down.
                        </p>
                        <p className='font-Poppins text-xl font-[300] text-white w-[36rem] mb:w-auto mb:text-sm lg:w-[37rem] lg:text-lg'> You will know which cryptocurrency or forex pair to trade, whether to go long or short, and what entry and exit prices to aim for once you receive a signal from us.</p>
                    </div>
                    <div className='mb:py-6 lg:py-0'>
                        <img data-aos="zoom-in" data-aos-duration="1500" className='h-[27rem] mb:h-auto mb:w-auto lg:h-[27rem]' src="\Images\cryoto\profit.webp" alt="img" />
                    </div>

                </div>
            </section>
        </>
    )
}

export default CryptoSignals