import { useEffect } from 'react';
import productos from "../../Productos";
import { useParams } from "react-router-dom";
import "./Style.css";

function ItemListContainer() {
  const [products, setproducts] = useState([]);
  const {idCategory} = useParams();
  useEffect(() => {
    productos
    .then((response) => {
      if(idCategory){
        const newproductos = response.filter((product) => product.category === idCategory) 
      setproducts(newproductos);
    } else {
      setproducts(response);
    }
    })
    .catch(error => console.log(error))
},[idCategory])
  return (
    <div className='Itemlistcontainer'>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer