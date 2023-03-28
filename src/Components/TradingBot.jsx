import React from 'react'

const TradingBot = () => {
    return (
        <>
            <div className=' h-auto flex justify-center items-center flex-col bg-[#000000] mb:h-auto mb:w-auto overflow-hidden'>
                <div className='h-full flex justify-center items-center flex-col py-10 space-y-7 mb:px-6 lg:px-0'>
                <h2 className='font-Poppins text-4xl text-[#22BBFD] font-semibold mb:text-2xl mb:text-center lg:text-4xl'>Feature Rich Crypto Trading Bot</h2>
                <p className='font-Poppins text-center text-2xl font-[300] w-4/6 text-white mb:w-auto mb:text-base lg:text-xl lg:w-4/6'>We provide a variety of free crypto trading bots. Check out one of them to see how bitcoinsignals365 has helped thousands of traders profit from the market.</p>
                </div>
                <div className=''>
                    <img className='h-[34rem] mb:h-auto lg:h-[34rem]' src="\Images\trading_bot.webp" alt="" />
                </div>
            </div>
        </>
    )
}

export default TradingBot