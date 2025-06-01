import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getAllMovie } from '../services/servics.js'
import GlobalLoader from '../components/ui/GlobalLoader.jsx'
import Table from '../components/Home/lists/Table'

function MoviesDetail() {
    const { id } = useParams()
    const [movies,setMovies] = useState([])
    const [movie, setMovie] = useState({})
    useEffect(() => {
        const getMovies = async () => {
            const movies = await getAllMovie()
            setMovies(movies)
            const movie = movies?.find(item => item.id == id)
            setMovie(movie)
        }
        getMovies()
    }, [id])    
    const embedUrl = movie?.youtubeUrl?.replace("watch?v=", "embed/")
    
    return (
        <div className='mt-32 mx-auto w-full md:w-[90%]'>
            {!movies.length ? <GlobalLoader /> :
            <div className='grid grid-cols-2 max-md:flex max-md:flex-col-reverse gap-5 my-10 h-full'>
                <div className=''>
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-8'>
                        <div className='rounded-[30px] overflow-hidden  max-lg:hidden'>
                            <img className='w-full h-full object-cover' src={`https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F${movie.image}&w=640&q=75`} alt="" />
                        </div>
                        <div className=" text-white p-6 rounded-xl w-full max-w-md">
                                <h1 className="text-xl font-bold mb-2">{movie.name}</h1>
                                <p className="text-sm text-gray-300 mb-4">
                                    {movie.genres?.map((item,index) => <span key={index}>{item.title}</span>)}
                                </p>

                                <div className="mb-3">
                                    <p className="text-white font-semibold text-sm">Dil</p>
                                    <div className='flex gap-2 items-center'>
                                        {
                                            movie.languages?.map((item,index) => <img key={index} 
                                            src={`https://flagcdn.com/w40/${item == "EN" ? 'us': item.toLowerCase()}.png`}
                                            alt="Rus dili" className="w-6 rounded-full h-6 mt-1" />)
                                        }
                                    </div>
                                    
                                </div>

                                <div className="mb-3">
                                    <p className="text-white font-semibold text-sm">Altyazı</p>
                                    {
                                        movie.subtitles?.map((item,index) => 
                                        <div key={index}>
                                            {item == "NONE" ? <p className='text-red-700'>Alzyazı Yoxdur</p> : 
                                             <img  
                                                src={`https://flagcdn.com/w40/${item == "EN" ? 'us': item.toLowerCase()}.png`}
                                                alt="Rus dili" className="w-6 rounded-full h-6 mt-1" />
                                            }
                                        </div>
                                        )
                                    }
                                </div>

                                <div className="space-y-2 text-sm text-white">
                                    <p><span className="font-semibold">İl:</span> {movie.year}</p>
                                    <p><span className="font-semibold">Ölkə:</span> {movie.country}</p>
                                    <p><span className="font-semibold">Rejissor:</span> {movie.director}</p>
                                    <p><span className="font-semibold">Aktyorlar:</span> 
                                        {movie.actors?.map((item,index,arr) => <span key={index}> {item} {(index == arr?.length - 1)  ? " " : ","}</span>)}
                                    </p>
                                    <p><span className="font-semibold">Yaş Həddi:</span> 
                                        {movie.ageLimit == 'EIGHTEEN' ? '18+' : movie.ageLimit == 'SIX' ? "6+" : '16+'}
                                    </p>
                                    <p><span className="font-semibold">Nümayiş Tarixi:</span> {
                                        movie.firstScreeningDate?.split("T")[0]
                                    }</p>
                                </div>
                                </div>

                    </div>
                    <div className='text-[#D9DADB] font-semibold  p-3'>
                        <p>{movie.description}</p>
                    </div>
                </div>
                <div className='p-3'>
                        <div className='w-full rounded-3xl h-[200px] md:h-[350px] overflow-hidden'>
                        <iframe
                            className="w-full h-full object-cover"
                            src={embedUrl}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
             }
             <Table />
        </div>
    )
}

export default MoviesDetail