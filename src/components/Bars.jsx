import { FaBars } from "react-icons/fa";
function Bars({func}) {
  const handle = () => func() 
  return (
    <div onClick={handle} className='fixed bottom-16 left-4 md:hidden'>
        <div className='text-white w-14 h-14 rounded-full border border-[#D9DADB] flex items-center justify-center cursor-pointer fixed   bg-[#ff00004a] backdrop-blur-sm z-20'>
            <FaBars />
        </div>
    </div>
  )
}

export default Bars