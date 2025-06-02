import Footer from './components/Footer'
import Header from './components/Header'
import Router from './routing/Router'
import CoolPage  from './components/CoolPage.jsx'
import './style/app.css'
import { ToastContainer } from 'react-toastify'
function App() {

  return (
    <>
      
      <ToastContainer />
      <CoolPage />
      <Header />
      <Router /> 
      <Footer />
    </>
  )
}

export default App
