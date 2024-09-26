import React from 'react'
import {getProduct} from "../../Productos"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react";
import "../ItemList/Style.css";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getProduct(id).then((response) => {
       setItem(response);
    });
  }, [id]);

  return <ItemDetail producto={item} />;
}

export default ItemDetailContainer