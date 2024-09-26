import productos from "../../Productos"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react";

const ItemDetailContainer =() => {
    const [product,setProduct] = useState({})
    const {idProduct} = useParams()

    useEffect(() => {
      productos
      .then((response) => {
        const newProduct = response.find((product) => product.id === idProduct)
        setProduct(newProduct)
      })
      .catch((error) => console.log(error))
    }, [idProduct])
  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer