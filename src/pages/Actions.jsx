import React from 'react'

function Actions() {
  const actions = [
    {
      title : 'Imaxda Super Gün',
      img : 'https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1738581189628_imax__aksiya__sayt_ucun.png&w=640&q=75'
    },
    {
      title : 'Səhər Tarifi',
      img : 'https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1738581039056_kino_seheri__aksiya__sayt_ucun.png&w=640&q=75'
    },
    {
      title : 'Tələbə Tarifi',
      img : 'https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1738579595976_telebe__tarifi_aksiya__sayt_ucun.png&w=640&q=75'
    },
    {
      title : 'Super Gün ',
      img : 'https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1738578284204_super_gun__tarifi_aksiya__sayt_ucun.png&w=640&q=75'
    },
    {
      title : 'Ailə Tarifi',
      img : 'https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1738575408381_aile_tarifi_aksiya__sayt_ucun.png&w=640&q=75'
    },
    {
      title : 'AD GÜNÜ',
      img : 'https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1737476634730_in1.jpg&w=640&q=75'
    }
  ]
  return (
    <div className='mt-32 pb-10 px-3 mx-auto w-full md:w-[90%]'>
        <h2 className='text-white text-[32px] font-semibold'>Aksiyalar</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-4'>
            {
              actions?.map((item,index) => 
              <div key={index} className='bg-[#4D4D4D] p-4 rounded-2xl'>
                <div className='h-[250px] rounded-2xl overflow-hidden'>
                    <img className='w-full h-full object-cover' src={item.img} alt="" />
                </div>
                <div className='font-semibold text-white py-2'>
                  {item.title}
                </div>
            </div>)
            }
        </div>
    </div>
  )
}

export default Actions