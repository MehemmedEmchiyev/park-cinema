import {Routes , Route} from "react-router"
import Home from "../pages/Home"
import MoviesDetail from "../pages/MoviesDetail"
import SeatSelection from "../pages/SeatSelection"

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/detail/:id" element={<MoviesDetail />}/>
        <Route path="/seat-selection/:id" element={<SeatSelection />}/>
    </Routes>
  )
}

export default Router