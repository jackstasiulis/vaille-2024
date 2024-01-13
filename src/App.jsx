import './App.scss'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import ShopPage from './Pages/ShopPage/ShopPage'

const App = () => {

  return (
    <>
      <Navbar />
      <ShopPage />
      <Banner />
      <Footer />
    </>
  )
}

export default App
