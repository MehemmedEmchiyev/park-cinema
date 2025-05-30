import { useEffect, useState } from 'react'
import Hero from '../components/Home/Hero'
import All from '../components/Home/lists/All'
import Table from '../components/Home/lists/Table'

function Home() {
    const lists = ["Hamısı", "Tezliklə", "Cədvəl"]
    const [active, setActive] = useState(0)
    const handler = (index) => setActive(index)
    useEffect(() => {handler(0)}, [])

    return (
        <div>
            <Hero />
            <div className='w-full md:w-[90%] mx-auto py-3'>
                <ul className='flex items-center gap-5 justify-between text-center my-8 mb-10'>
                    <li className='text-[#D9DADB] text-[30px] max-md:text-[26px] max-sm:text-[24px] font-bold w-full flex items-center justify-center [text-shadow:0px_0px_14px_#fff]'>Siyahı</li>
                    <li className='text-[#D9DADB] text-[30px] max-md:text-[26px] max-sm:text-[24px] font-bold w-full flex items-center justify-center '>Treylerlər</li>
                </ul>
                <ul className="flex items-center gap-5 max-md:justify-center pb-3">
                    {lists.map((item, index) => <li key={index} onClick={() => handler(index)} className={`text-[20px]  cursor-pointer duration-300 text-[#D9DADB]  font-medium opacity-55 ${index == active ? "underline opacity-100 underline-offset-[6px] " : ""}`}>{item}</li>)}
                </ul>
                <div>
                    {active == 0 ? <All /> : active == 1 ? <All /> : <Table />}
                </div>
            </div>
        </div>
    )
}

export default Home