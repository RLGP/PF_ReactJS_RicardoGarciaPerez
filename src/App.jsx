import {Routes,Route} from "react-router-dom";
import React from "react";
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemList/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"
import NoPage from "./pages/NoPage";
import Footer from './components/NavBar/Footer'

export default function App() {
  return (
    <>
 <NavBar />
    <Routes>
          <Route>
          <Route path="/" element={<ItemListContainer saludo="Nuestros productos" />} />
          <Route path="/category/:category" element={<ItemListContainer saludo="Nuestros productos"/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
    </Routes>
  <Footer/>
    </>
  )
}


