import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Catalog from './components/Catalog/Catalog'
import Footer from './components/Footer/Footer'
import ProductOnce from './components/ProductOnce/ProductOnce'
import BasketPage from './components/Basket/Basket'
import Slider from './components/Slider/SliderC'
import {Routes,Route} from 'react-router-dom'
import Modal from './components/Modal/Modal';
import {useState} from 'react'

function App() {

  const [modalActive, setModalActive] = useState(false);

  const [basket,setBasket] = useState([])

  return (
    <> {}
      <Header basket={basket}/>
        <Routes>
          <Route path="/" element={<Banner/>} />
          <Route path="/catalog" element={<Catalog addToBasket={setBasket} basket={basket}/>}/>
          <Route path="/catalog/:id" element={<ProductOnce/>}/>
          <Route path="/basket" element={<BasketPage basket={basket}/>}/>
        </Routes>
        <Slider/>
      <Footer/>
    </>
  )
}

export default App


