import {Routes , Route} from "react-router"
import Home from "../pages/Home"
import MoviesDetail from "../pages/MoviesDetail"
import SeatSelection from "../pages/SeatSelection"
import BuyTicket from "../pages/BuyTicket"
import Auth from "../pages/Auth"
import Login from "../pages/Login"
import Register from "../pages/Register"

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/detail/:id" element={<MoviesDetail />}/>
        <Route path="/seat-selection/:id" element={<SeatSelection />}/>
        <Route path="/buy-ticket/:id" element={<BuyTicket />}/>
        <Route path="/auth" element={<Auth />}>
          <Route path="" element={<Login />}/>
          <Route path="register" element={<Register />}/>
        </Route>
    </Routes>
  )
}

export default Router