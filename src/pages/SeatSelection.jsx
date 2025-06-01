import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getDetail } from "../services/servics.js"
import { IoCalendar } from "react-icons/io5";
import { GoClockFill } from "react-icons/go";
import GlobalLoader from '../components/GlobalLoader';
import Display from '../components/Detail/Display.jsx';
import TicketLegend from '../components/Detail/TicketLegend.jsx';
import { useSelector } from 'react-redux';

function SeatSelection() {
  const {id} = useParams()
  const {price} = useSelector(store => store.ticket_price)
  
  const [movie , setMovie] = useState({})
  const [movies , setMovies] = useState([])
  useEffect(() => {
    const details = async () => {
        const detail = await getDetail()
        setMovies(detail)
        const movie = detail?.find(item => item.id == id)
        setMovie(movie)
    }
    details()
  },[])
  console.log(movie);
  
  return (
    <div className='mt-32 mb-15 mx-auto w-full md:w-[90%]'>
        {!movies.length ? <GlobalLoader /> :
        <div>
            <h2 className='text-white font-semibold text-3xl mb-3'>Oturacaq Seçimi</h2>
            <div className='bg-[url("https://new.parkcinema.az/images/movie-herobg.svg")] flex items-center gap-3 p-3 overflow-hidden relative bg-cover bg-center h-[300px] rounded-2xl'>
                <div className='absolute w-full h-full top-0 left-0 right-0 bg-[rgba(0,0,0,.7)] '></div>
                <div className='text-white relative w-[200px] rounded-2xl overflow-hidden z-10 h-full'>
                    <img className='w-full h-full object-cover' src={`https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F${movie?.movie?.image}&w=640&q=75`} alt="" />
                </div>
                <div className='text-white relative z-10 flex flex-col h-full justify-center gap-3 max-md:w-[300px]'>
                    <div className='flex flex-col max-md:gap-2 md:gap-3 max-sm:text-[15px]'>
                        <h1 className="text-nowrap truncate">{movie.movie?.name}</h1>
                        <div className="flex items-center gap-3">
                            <div className="text-[18px] mt-[1px] font-semibold">
                                <div>{movie.type?.replace("_","")}</div>
                            </div>
                        </div>
                        <p className="flex items-center gap-2">
                            <IoCalendar />
                            {movie.calendarDate?.split("T")[0]}
                        </p>
                        <p className="flex items-center gap-2">
                            <GoClockFill />
                            {movie.time}
                        </p>
                    </div>
                    <div className='flex flex-col max-md:gap-1 md:gap-2  max-sm:text-[13px]'>
                        <p className="text-[#D9DADB] !text-[16px] font-normal undefined">
                            <span className="!text-[16px]  font-semibold undefined">Dil: </span> 
                            {movie.language}
                        </p>
                        <p className="text-[#D9DADB] !text-[16px] font-normal undefined">
                            <span className="!text-[16px] font-semibold undefined">Kinoteatr: </span>
                            {movie.theatreTitle}
                        </p>
                        <p className="text-[#D9DADB] !text-[16px] font-normal undefined">
                            <span className="!text-[16px] font-semibold undefined">Janr: </span> 
                            {movie.movie?.genres?.map((item,index) => <span key={index}>
                                {item.title}
                            </span>)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        }
        <div className='flex items-center justify-between py-3'>
            <TicketLegend />
        </div>
        <Display />
        <div className='flex items-center justify-between py-3'>
            <div className='text-white font-semibold'>
                Ümumi : {price}
            </div>
            <div>
                <button className='cursor-pointer flex items-center font-semibold justify-center bg-[#D52B1E] opacity-65 hover:opacity-100 duration-200 rounded-[20px] w-[100px] h-[36px] px-4 py-2  text-white text-sm hover:bg-[#A81A1A] transition md:!w-[260px]  max-sm:!w-[60px] max-sm:!p-0 max-sm:!text-[12px] max-sm:leading-3'>Bilet Al</button>
            </div>
        </div>
    </div>
  )
}

export default SeatSelection