import Bars from './Bars';
import MobileMenu from './MobileMenu';
import useMenuStatue from '../hooks/useMenuStatue';
import LangSelect from './LangSelect';
import { Link } from 'react-router';

function Header() {
  const {statue , change} = useMenuStatue()
  return ( 

    <div className='z-100 bg-transparent absolute top-0 right-0 left-0 flex items-center justify-between w-full mx-auto  lg:w-[90%]'>
        <Bars func = {change} />
        <MobileMenu  statue = {statue} change={change}/>
        
        <div className='w-full flex items-center justify-center md:justify-start gap-0 lg:gap-36'>
            <div className='w-[150px] h-20'>
                <Link to={'/'}>
                    <img className='w-full h-full object-contain' src="https://new.parkcinema.az/images/logo.svg" alt="" />           
                </Link>
            </div>
            <div className='hidden md:block'>
                <menu className='flex items-center gap-[60px] text-[#d9dadb] '>
                    <li className='hover:text-[#D52B1E] duration-300 cursor-pointer '>Kinoteartlar</li>
                    <li className='hover:text-[#D52B1E] duration-300 cursor-pointer '>Aksiyalar</li>
                    <li className='hover:text-[#D52B1E] duration-300 cursor-pointer '>FAQ</li>
                    <li className='hover:text-[#D52B1E] duration-300 cursor-pointer '>Əlaqə</li>
                    <li className='hover:text-[#D52B1E] duration-300 cursor-pointer '>Profil</li>
                </menu>
            </div>    
        </div>
        <LangSelect display = {false} />
    </div>
  )
}
export default Header