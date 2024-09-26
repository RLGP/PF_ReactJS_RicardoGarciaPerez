import {BrowserRouter,Routes,Route} from "react-router-dom";

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemList/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"
import NoPage from "./pages/NoPage";

function App() {

  return (
    <>
 <BrowserRouter>
 <NavBar />
    <Routes>
          <Route>
          <Route path="/" element={<ItemListContainer saludo="Nuestros productos" />} />
          <Route path="category/:idCategory" element={<ItemListContainer saludo="Nuestros productos"/>}/>
          <Route path="productos/:idProduct" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
    </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
