import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {getProducts} from "../../Productos";
import { useParams } from "react-router-dom";
import "./Style.css";

const ItemListContainer = ({}) => {
  const [items, setItems] = useState([]);
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);

    getProducts(category).then((response) => {
      setItems(response);
      setIsLoading(false);

    });
  }, [category]);

  return <ItemList productos={items} isLoading={isLoading} />;
};

export default ItemListContainer