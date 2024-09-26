import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import productos from "../../Productos";
import { useParams } from "react-router-dom";
import "./Style.css";

function ItemListContainer = ({saludo}) => {
  const [products, setProducts] = useState([]);
  const {idCategory} = useParams();
  useEffect(() => {
    productos
    .then((response) => {
      if(idCategory){
        const newProducts = response.filter((producto) => producto.category === idCategory) 
      setProducts(newProducts);
    } else {
      setProducts(response);
    }
    })
    .catch((error) => console.log(error))
    .finally(() => console.log("Finalizo la promesa"));
},[idCategory])
  return (
    <div className='Item-list-container'>
        <h2 className='title-items'>{saludo}</h2>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer