import Loader from "./Loader"

function GlobalLoader() {
  return (
    <div className='z-300 w-full h-full bg-black fixed top-0 left-0 flex items-center justify-center text-white'>
       <Loader />
    </div> 
  )
}

export default GlobalLoader