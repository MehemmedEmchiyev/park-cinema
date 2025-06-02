import LangSelect from './ui/LangSelect';
import MenuItem from './MenuItem'

function MobileMenu({statue,change}) {

  return (
    <div className={`fixed ${statue ? "bottom-0" : "bottom-[-1000px]"} duration-500 w-full left-0 bg-[rgb(48,48,48,.9)] rounded-t-2xl py-2 md:hidden` }>
        <div className='py-2' onClick = {change}>
            <div className=' bg-[#6B6B6B] w-[30%] h-1 mx-auto'></div>
        </div>
        <div className='grid grid-cols-2 p-3 gap-3'>
            <MenuItem values={
                {
                    src : "https://new.parkcinema.az/_next/image?url=%2Ficons%2Fglasses.png&w=128&q=75" , 
                    title : 'Profile',
                    style : "",
                    url : '/auth'
                }
            }/>
            <MenuItem values={
                {
                    src : "https://new.parkcinema.az/_next/image?url=%2Ficons%2Fticket.png&w=128&q=75" , 
                    title : 'Mənim Biletim',
                    style : ""
                }
            }/>
            <MenuItem values={
                {
                    src : "https://new.parkcinema.az/_next/image?url=%2Ficons%2Ffilm.png&w=128&q=75" , 
                    title : 'Kinoteartlar',
                    style : "col-span-2 justify-center",
                    url : '/theatres'
                }
            }/>
            <MenuItem values={
                {
                    src : "https://new.parkcinema.az/_next/image?url=%2Ficons%2Falarm.png&w=128&q=75" , 
                    title : 'Aksiyalar',
                    style : "col-span-2 justify-center",
                    url : '/actions'
                }
            }/>
            <MenuItem values={
                {
                    src : "https://new.parkcinema.az/icons/call.svg" , 
                    title : 'Əlaqə',
                    style : ""
                }
            }/>
            <MenuItem values={
                {
                    src : "https://new.parkcinema.az/icons/faq.svg" , 
                    title : 'FAQ',
                    style : "",
                    url : '/faq'
                }
            }/>
            <MenuItem values={
                {
                    src : "https://new.parkcinema.az/icons/terms.svg" , 
                    title : 'Hüquqi Şərtlər',
                    style : ""
                }
            }/>
            <MenuItem values={
                {
                    src : "https://new.parkcinema.az/images/google-play.svg" , 
                    title : '',
                    style : ""
                }
            }/>
        </div>
        <LangSelect display = {true}/>
    </div>
  )
}

export default MobileMenu