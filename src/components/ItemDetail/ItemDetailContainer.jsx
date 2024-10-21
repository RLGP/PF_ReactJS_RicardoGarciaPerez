import React from 'react'
import { getProduct } from "../../firebase/Productos"
import { useParams, Navigate } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react";
import "../ItemList/Style.css";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getProduct(id)
      .then((response) => {
        setTimeout(() => {
          setItem(response);
          setIsLoading(false);
        }, 300);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setIsLoading(false);
        setNotFound(true);
      });
  }, [id]);
  if (notFound) {
    return <Navigate to="*" />;
  }

  return <ItemDetail producto={item} isLoading={isLoading} />;
}


export default ItemDetailContainer