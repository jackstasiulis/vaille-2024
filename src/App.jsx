import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import ShopPage from './Pages/ShopPage/ShopPage'
import ItemPage from './Pages/ItemPage/ItemPage'
import Footer from './Components/Footer/Footer'

import { BrowserRouter, Routes, Route} from 'react-router-dom';




const App = () => {

  return (
    <>
    <Navbar />

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<ShopPage />}/>
        <Route path='/item/:itemId' element={<ItemPage />}/>

      </Routes>
    </BrowserRouter>

    <Footer />
    </>
  )
}

export default App
