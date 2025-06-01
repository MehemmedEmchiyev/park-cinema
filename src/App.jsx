import Footer from './components/Footer'
import Header from './components/Header'
import Router from './routing/Router'
import CoolPage  from './components/CoolPage.jsx'
import './style/app.css'
function App() {

  return (
    <>
      <CoolPage />
      <Header />
      <Router /> 
      <Footer />
    </>
  )
}

export default App
