import productos from "../../Productos"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react";

const ItemDetailContainer =() => {
    const {product,setproduct} = useState({})
    const {idProduct} = useParams()

    useEffect(() => {
      productos
      .then((response) => {
        const newproduct = response.find((product) => product.id === idProduct)
        setproduct(newproduct)
      })
      .catch((error) => console.log(error))
    }, [idProduct])
  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer