import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

const Pricing = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <section id='pricing' className='h-auto bg-gradient-to-r from-[#1A1A32] via-[#19042A] to-[#05001B] overflow-hidden mb:h-auto mb:w-auto'>
                <div className="flex justify-center items-center text-[#22BBFD] text-3xl font-semibold font-Poppins"
                >Pricing Table</div>
                {/* outer wrapper of pricing  */}
                <div className="wrapper flex justify-evenly items-center gap-7 py-10 bg-gradient-to-r from-[#1A1A32] via-[#19042A] to-[#05001B] mb:h-auto mb:w-auto mb:flex-col mb:py-8 lg:py-10 lg:flex-row">


                    {/* first pricing div  */}
                    <div data-aos="flip-left" data-aos-duration="1500" className='py-10 px-8 flex flex-col justify-center items-center bg-gradient-to-b from-[#2B0970] to-[#090218] rounded-3xl border-2 border-cyan-400 hover:bg-gradient-to-b hover:from-[#230167] hover:to-[#810C94] pricingdiv mb:px-3 mb:w-auto mb:h-auto'>
                        <div className='text-center space-y-4 font-Poppins text-white'>
                            <p>1-Month Room Access</p>
                            <h3 className='text-3xl font-[400] text-[#DB00FF] mb:text-2xl lg:text-3xl'>Crypto Signals</h3>
                            <p className='line-through'>$116/Month</p>
                            <h3 className='text-3xl text-[#22BBFD] font-semibold mb:text-2xl lg:text-3xl'>$99/Month</h3>
                            {/* <span className='font-[300] text-sm'>$58 Billed Every Month</span> */}
                        </div>
                        <div className='space-y-2 pl-4 pt-8 lg:w-80 mb:w-auto lg:px-0 lg:pl-4 mb:px-6'>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>2-3 Daily spot signals</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>2-3 Daily futures signals</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>1-2 HODL picks</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>1-2 NFT Signals</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>100GB+ Crypto trading course</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>95% accurate signals</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>2 targets 1 stop loss</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>Favourable risk reward ratio</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>Delivery through WhatsApp API</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>Regularly Updated Track record</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>24/7 Call support</span></p>
                        </div>
                        <div className='pt-8'>
                            <Link to='/contact'>
                                <button className='py-2 px-6 bg-gradient-to-r from-[#22BBFD] via-[#905EF8] to-[#D621F4] rounded-xl text-white border-2 border-[#22BBFD] font-Poppins text-lg mb:py-1 mb:px-4 lg:py-2 lg:px-6 btn_hover'>Start 7-Day Free Tail</button>
                            </Link>
                        </div>
                    </div>
                    {/* second pricing div  */}
                    <div data-aos="zoom-in" data-aos-duration="1500" className='pricingdiv py-10 px-8 flex flex-col justify-center items-center bg-gradient-to-b from-[#2B0970] to-[#090218] rounded-3xl border-2 border-cyan-400  hover:bg-gradient-to-b hover:from-[#230167] hover:to-[#810C94] pricingdiv mb:px-3 mb:w-auto mb:h-auto'>
                        <div className='text-center space-y-4 font-Poppins text-white'>
                            <p>6-Month Room Access</p>
                            <h3 className='text-3xl font-[400] text-[#DB00FF] mb:text-2xl lg:text-3xl'>Forex Signals</h3>
                            <p className='line-through'>$99/Month</p>
                            <h3 className='text-3xl text-[#22BBFD] font-semibold mb:text-2xl lg:text-3xl'>$89/Month</h3>
                            {/* <span className='font-[300] text-sm'>$222 Billed Every 6 Month</span> */}
                        </div>
                        <div className='space-y-2 pl-4 pt-8 lg:w-80 mb:w-auto lg:px-0 lg:pl-4 mb:px-6'>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>2-3 pair signals daily</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>2-3 swing trading signals</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>1-2 data signals weekly</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>1-2 positional Signals monthly</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>30GB+ forex trading course</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>95% accurate signals</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>2 targets 1 stop loss</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>Favourable risk reward ratio</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>Delivery through WhatsApp API</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>Regularly Updated Track record</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>24/7 Call support</span></p>
                        </div>
                        <div className='pt-8'>
                            <Link to='/contact'>
                                <button className='py-2 px-6 bg-gradient-to-r from-[#22BBFD] via-[#905EF8] to-[#D621F4] rounded-xl text-white border-2 border-[#22BBFD] font-Poppins text-lg mb:py-1 mb:px-4 lg:py-2 lg:px-6 btn_hover'>Start 7-Day Free Tail</button>
                            </Link>
                        </div>
                    </div>
                    {/* third pricing div  */}
                    <div data-aos="flip-right" data-aos-duration="1500" className='py-10 px-8 flex flex-col justify-center items-center bg-gradient-to-b from-[#2B0970] to-[#090218] rounded-3xl border-2 border-cyan-400 hover:bg-gradient-to-b hover:from-[#230167] hover:to-[#810C94] pricingdiv mb:px-3 mb:w-auto mb:h-auto'>
                        <div className='text-center space-y-5 font-Poppins text-white'>
                            <p>12-Month Room Access</p>
                            <h3 className='text-3xl font-[400] text-[#DB00FF] mb:text-2xl lg:text-[1.8rem]'>Account Management</h3>
                            <p className='line-through'>$299/Month</p>
                            <h3 className='text-3xl text-[#22BBFD] font-semibold mb:text-2xl lg:text-3xl'>$199/Month</h3>
                            {/* <span className='font-[300] text-sm'>$312 Billed Every 12 Month</span> */}
                        </div>
                        <div className='space-y-2 pl-4 pt-4 lg:w-80 mb:w-auto lg:px-0 lg:pl-2 mb:px-6'>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>Placing orders</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>Managing trades with stop loss</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>Placing take profit orders</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>Proper capital allocation per trade</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>Hedging strategy</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>Trailing stop loss strategy</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>Leveraging strategically</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>100GB+ crypto/forex course</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>120-150% monthly return</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>Daily reporting of trades</span></p>
                            <p className='flex space-x-2 font-Poppins text-white mb:text-sm lg:text-base'><span><img src="\Images\check.webp" alt="" /></span> <span>24/7 Call support</span></p>
                        </div>
                        <div className='pt-7'>
                            <Link to='/contact'>
                                <button className='py-2 px-6 bg-gradient-to-r from-[#22BBFD] via-[#905EF8] to-[#D621F4] rounded-xl text-white border-2 border-[#22BBFD] font-Poppins text-lg mb:py-1 mb:px-4 lg:py-2 lg:px-6 btn_hover'>Start 7-Day Free Tail</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Pricing