import React from 'react'
import "../ItemList/Style.css";

const ItemDetail = ({ producto }) => {

  function handleClick() {
  }
  return (
    <>
      <div className="carta mb-3" >
        <div className="row g-0">
          <h3>{producto.name}</h3>
          <div className="col-md-4 contenedor">
              <img
                src={producto.image}
                className="img-fluid rounded-start card-img-top w-55 mx-20 p-2"
                alt={producto.alt}
              />
          </div>
          <div className="col-md-8 contenedor">
            <div className="card-body mt-200">
              <p className="card-text "> {producto.description}</p>
              <p className="precio">  Precio $ {producto.price} </p>
              <button onClick={handleClick} className="btn btn-primary me-2 mt-200" >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default ItemDetail