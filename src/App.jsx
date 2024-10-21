import {Routes,Route} from "react-router-dom";
import React from "react";
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemList/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"
import NoPage from "./pages/NoPage";
import Checkout from "./components/Checkout/Checkout";
import Footer from './components/NavBar/Footer'
import { CartProvider } from './components/NavBar/CartContext';

export default function App() {
  return (
<CartProvider>
    <>
 <NavBar />
    <Routes>
          <Route>
          <Route path="/" element={<ItemListContainer saludo="Nuestros productos" />} />
          <Route path="/category/:category" element={<ItemListContainer saludo="Nuestros productos"/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NoPage/>}/>
        </Route>
    </Routes>
  <Footer/>
    </>
</CartProvider>
  )
}


