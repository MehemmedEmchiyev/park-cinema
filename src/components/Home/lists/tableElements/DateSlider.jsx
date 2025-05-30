import { data } from 'jquery';
import React, { useRef } from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const generateDates = () => {
  const dates = []
  const today = new Date()
  for(let i =0 ; i < 11 ; i++){
    const date = new Date()
    date.setDate(today.getDate() + i)

    dates.push({
      month : months[date.getMonth()],
      day : date.getDate()
    })
  }
  return dates
};
const dates = generateDates();

export default function DateSlider() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const { current } = containerRef;
    if (current) {
      const scrollAmount = 120;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex items-center justify-center rounded-md w-full md:w-[500px]">
      <button onClick={() => scroll('left')} className="text-white text-4xl duration-300 cursor-pointer hover:scale-102">
        <MdOutlineKeyboardArrowLeft />
      </button>
      <div
        ref={containerRef}
        className="flex overflow-x-auto cursor-pointer gap-4 hide-scrollbar px-2"
      >
        {dates.map((date, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[60px] rounded-full bg-[#474747] p-2 shadow-md"
          >
            <span className="text-sm text-white pb-2">{date.month}</span>
            <div className="mt-1 bg-[#606060] rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-white font-semibold">{date.day}</span>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => scroll('right')} className="text-white duration-300 cursor-pointer hover:scale-102 text-4xl">
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
}
