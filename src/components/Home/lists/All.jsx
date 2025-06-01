import Selects from '../Selects'
import MovieCard from './listElements/MovieCard'
import {getAllMovie} from '../../../services/servics.js'
import { useEffect, useState } from 'react'
import Loader from '../../ui/Loader.jsx'
import { useSelector } from 'react-redux' 

function All() { 
  const {selectedLang , selectedTheatres} = useSelector(store => store.selector)
  const [movies , setMovies] = useState([])
  
  useEffect(() => {
    const getMovies = async () => {
      const movies = await getAllMovie()
      const filtered = movies.filter(item => item.languages[0] == selectedLang )      
      setMovies(selectedLang ? filtered : movies)
    }
    getMovies()
  },[selectedLang])
  
  return (
    <div>
        <div className='flex items-center flex-col md:flex-row p-5'>
          <Selects list="all" />
        </div>

        {movies.length ?
        <div className='grid grid-cols-1 p-3 md:p-0 gap-10 md:grid-cols-4'>
            {
              movies?.map((item,index) => <MovieCard key={index} item = {item} />)
            }
        </div> :
        <Loader className="text-center"/>
        }
    </div>
  )
}

export default All