import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getDetail } from '../services/servics'
import PhoneInput from '../components/Buyticket/PhoneInput'
import TermsCheckbox from '../components/Buyticket/TermsCheckbox'
import { useSelector } from 'react-redux'
import Cronometr from '../components/Buyticket/Cronometr'

function BuyTicket() {
  const {price, place} = useSelector(store => store.ticket_price)

  const {id} = useParams()
  const [seans , setSeans] = useState({})
  useEffect(() => {
    const details = async () => {
      const data = await getDetail()
      const seans = data.find(item => item.id == id)
      setSeans(seans)
    }
    details()
  },[])
  console.log(seans);
  
  
  return (
    <div className='mt-32 px-3 pb-10 w-full mx-auto md:w-[90%]'>
        <div>
          <h1 className='text-white font-semibold text-[32px] tracking-[1px]'>Ödəniş</h1>
          <Cronometr />
        </div>
        <div className=' flex flex-col md:flex-row gap-5 items-center justify-between pt-5'>
          <div className='flex flex-col w-full md:w-max items-end'>
            <input type="email" placeholder='Email' className=' p-3 text-[#9CA3AF] text-[17px] outline-0 w-full md:w-[400px] border-b-1 border-white' />
            <PhoneInput />
            <TermsCheckbox />
            <button className='py-3 px-5 duration-300 rounded-4xl cursor-pointer  w-max text-[#686161] hover:text-white hover:bg-[#D02A1D] bg-[#62302D] '>Ödənişə Keç</button>
          </div>
          <div className='w-full order-[-1] md:order-1 md:w-[400px] p-5 rounded-xl h-max bg-[#4D4D4D]'>
              <div className='text-[#D9DADB] flex flex-col gap-5'>
                <div className="flex flex-col pb-15 font-semibold gap-2">
                    <h2 className="text-xl font-medium">{seans?.movie?.name}</h2>
                    <p>{seans.theatreTitle}</p>
                    <p className="flex gap-4">
                      <span>{seans.calendarDate?.split("T")[0]} {seans.time}</span>
                      <span>{seans.hallTitle}</span>
                    </p>
                    <p className="flex gap-6 flex-col">
                      {
                        place?.map((item,index) => <span key={index}>Sıra {item.sira}, Yer {item.yer} </span>)
                      }
                    </p>
                </div>
                <div><span className='font-semibold'>Ümumi:</span> {price} AZN</div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default BuyTicket