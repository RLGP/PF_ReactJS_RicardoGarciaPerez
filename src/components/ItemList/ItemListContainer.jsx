import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProducts } from "../../firebase/Productos";
import { useParams, Navigate } from "react-router-dom";
import "./Style.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProducts(category)
      .then((response) => {
        setTimeout(() => {
          if (response.length === 0 && category) {
            setNotFound(true);
          } else {
            setItems(response);
            setNotFound(false);
          }
          setIsLoading(false);
        }, 300);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
        setNotFound(true);
      });
  }, [category]);

  if (notFound) {
    return <Navigate to="*" />;
  }
  
  return <ItemList productos={items} isLoading={isLoading} />;
};

export default ItemListContainer;