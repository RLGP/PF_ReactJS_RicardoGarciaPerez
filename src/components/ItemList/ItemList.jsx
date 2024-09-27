import React from 'react'
import propTypes from "prop-types"
import { Link } from 'react-router-dom'
import "./Style.css";
  
const ItemList = ({ productos, isLoading  }) => {
  if (isLoading) {
    return <h2 className="bg-info" >Loading...</h2>;
  }
  return ( 
    <div className='conteiner '>
      {productos.map((item, i) => (
        <article key={i} className=" col-sm-12 col-md-6 col-lg-3 mt-3">
          <div className="card gradiente">
          <Link to={`/item/${item.id}`}><h3>{item.name}</h3></Link>
            <Link to={`/item/${item.id}`}>  
            <img
              src={item.image}
              className="imagenProductoso card-img-top w-100 mx-auto p-2"
              alt={item.alt}/>
            </Link>
            <div className="card-body">
              <p className="precio-list">  Precio $ {item.price} </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

ItemList.propTypes = {
  productos: propTypes.array.isRequired,
  isLoading: propTypes.bool,

};

export default ItemList