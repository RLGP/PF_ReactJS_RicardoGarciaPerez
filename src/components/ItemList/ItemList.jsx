import React from 'react'
import propTypes from "prop-types"
import { Link } from 'react-router-dom'
import "./Style.css";
  
const ItemList = ({ productos, isLoading  }) => {
  if (isLoading) {
    return <h2 className="bg-info" >Loading...</h2>;
  }
  return (
    <>
      {productos.map((item, i) => (
        <article key={i} className="col-sm-12 col-md-6 col-lg-3 mt-3">
          <div className="card gradiente">
            <h3>{item.name}</h3>
            <Link to={`/item/${item.id}`}>  
            <img
              src={item.image}
              className="imagenReceta card-img-top w-100 mx-auto p-2"
              alt={item.alt}/>
            </Link>
            <div className="card-body">
              <p className="precio">  Precio $ {item.price} </p>
            </div>
          </div>
        </article>
      ))}
    </>
  )
}

ItemList.propTypes = {
  productos: propTypes.array.isRequired,
  isLoading: propTypes.bool,

};

export default ItemList