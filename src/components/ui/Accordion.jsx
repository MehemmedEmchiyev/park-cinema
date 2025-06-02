import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";

function Accordion({question}) {
    const [statue , setStaue] = useState(false)
    const handler = () =>{
        setStaue(!statue)
    }
    return (
        <div onClick={handler} className='text-[#D9DADB] cursor-pointer border-b-1 py-3 border-white w-full '>
            <div className='flex items-center justify-between'>
                <div className='font-bold text-[18px]'>{question.title}</div>
                <div className={`${statue ? "rotate-45" : "rotate-0"} duration-300 transition-all`}>
                    <FaPlus />
                </div>
            </div>
            <p className={` text-[14px] font-semibold overflow-hidden  duration-500 ease-in-out transition-all ${!statue ? 'max-h-0  opacity-0' : 'max-h-96 opacity-100'} `}>
                {question.question}
            </p> 
        </div>
    )
}

export default Accordion