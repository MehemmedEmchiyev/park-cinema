import React, { useEffect, useState ,Component, useRef } from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import $ from 'jquery'
import banner1 from '../../assets/img/banner1.webp'
import banner2 from '../../assets/img/banner2.webp'
import banner3 from '../../assets/img/banner3.webp'
import banner4 from '../../assets/img/banner4.webp'
import banner5 from '../../assets/img/banner5.webp'

function Hero() {
  let images = [banner1 , banner2 , banner3 , banner4 , banner5]
  const [x , setX] = useState(0)
  useEffect(() => {
    $(".btn").off("click").on("click", function() {
      $("#slider-img").fadeOut("fast", function() {
        setX(prev => (prev < images.length - 1 ? prev + 1 : 0));
        $("#slider-img").fadeIn("fast")
      })
    })
  },[x])

  return (
    <div className='w-full pt-20 md:pt-0 h-[400px] md:h-screen p-3 md:p-0'>
      <div className='w-full h-full '>
          <div className='hidden md:block absolute top-0 left-0 right-0 w-full h-52 bg-gradient-to-b from-black/100 to-transparent z-10 pointer-events-none'></div>
          <div className='hidden md:block absolute top-0 left-0 bottom-0 w-52 h-full bg-gradient-to-r from-black/70 to-transparent z-10 pointer-events-none'></div>
          <div className='h-full rounded-2xl'>
            <img src={`${images[x]}`} id='slider-img' className='rounded-2xl w-full h-full object-cover' alt="" />
          </div>
          <button className="btn cursor-pointer absolute top-[15%] right-3 md:right-0 md:top-1/2  w-[10%] md:w-18  md:h-24 rounded-l-full flex items-center justify-center">
              <img src="https://new.parkcinema.az/images/nav-bg.svg" className='opacity-80' alt="" />
              <MdOutlineKeyboardArrowRight className='z-100 absolute text-white text-4xl' />
          </button>
          <div className='hidden md:block absolute bottom-0 left-0 right-0 w-full h-62 bg-gradient-to-t from-black/100 to-transparent z-10 pointer-events-none'></div>          
      </div>
    </div>  
  )
}

export default Hero