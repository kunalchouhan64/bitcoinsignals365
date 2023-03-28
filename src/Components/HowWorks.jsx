import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HowWorks = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <section id='howworks' className='h-auto w-auto pt-12 bg-gradient-to-r from-[#1A1A32] via-[#19042A] to-[#05001B] mb:h-auto mb:w-auto mb:px-4 lg:px-0 overflow-hidden'>
        <div className="flex justify-center items-center text-[#22BBFD] text-4xl font-semibold font-Poppins mb:text-2xl lg:text-4xl"
        >How Does It Work</div>
        <div className='h-auto w-auto flex justify-evenly items-center py-16 bg-gradient-to-r from-[#1A1A32] via-[#19042A] to-[#05001B] text-white mb:flex-col mb:py-10 mb:gap-10 lg:flex-row lg:gap-0 lg:py-16'>

          <div data-aos="zoom-in" data-aos-duration="1500">
            <div className='flex justify-center items-center'>
              <div>
                <p className='py-4 px-[4rem] rounded-t-full bg-[#D621F4] mb:py-2 mb:px-[2rem] lg:py-4 lg:px-[4rem]'><img className='h-16 mb:h-12 lg:h-16' src="\Images\join.png" alt="" /></p>
              </div>
            </div>
            <div className=' howwork_div1 py-16 backdrop-blur-xl backdrop-opacity-50 z-20 h-full px-1 border-2 border-[#DB00FF] text-center space-y-4 rounded-[2.5rem] mb:py-12 mb:px-5 lg:py-16 lg:px-2'>
              <p className='text-2xl font-Poppins text-white'>Join</p>
              <p className='font-Poppins text-white text-lg w-80 mb:w-60 mb:text-base lg:text-lg lg:w-80'>Choose between the above mentioned three plans</p>
            </div>

          </div>

          <div data-aos="zoom-in" data-aos-duration="1500">
            <div className='flex justify-center items-center'>
              <div>
                <p className='py-4 px-[4rem] rounded-t-full bg-[#22BBFD] mb:py-2 mb:px-[2rem] lg:py-4 lg:px-[4rem]'><img className='h-16 mb:h-10 lg:h-14' src="\Images\copy.png" alt="" /></p>
              </div>
            </div>
            <div className=' howwork_div2 py-16 z-20 h-full px-1 border-2 border-[#22BBFD] text-center space-y-4 rounded-[2.5rem] mb:py-12 mb:px-5 lg:py-16 lg:px-2'>
              <p className='text-2xl font-Poppins text-white'>Copy</p>
              <p className='font-Poppins text-white text-lg w-80 mb:w-60 mb:text-base lg:text-lg lg:w-80'>Simply trade as directed by our professional traders </p>
            </div>

          </div>

          <div data-aos="zoom-in" data-aos-duration="1500">
            <div className='flex justify-center items-center'>
              <div>
                <p className='py-4 px-[4rem] rounded-t-full bg-[#793CF9] mb:py-2 mb:px-[2rem]'><img className='h-16 mb:h-12 lg:h-16' src="\Images\profit.png" alt="" /></p>
              </div>
            </div>
            <div className=' howwork_div3 py-16 z-20 h-full px-1 border-2 border-[#793CF9] text-center space-y-4 rounded-[3rem] mb:py-12 mb:px-5 lg:py-14 lg:px-4'>
              <p className='text-2xl font-Poppins text-white'>Profit</p>
              <p className='font-Poppins text-white text-lg w-72 mb:w-60 mb:text-base lg:text-lg lg:w-72'>Start making consistent profit with our low risk high reward strategies</p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default HowWorks