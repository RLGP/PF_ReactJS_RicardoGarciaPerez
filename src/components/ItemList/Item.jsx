import { Link } from "react-router-dom"

const Item=({product}) => {
  return (
  <div key={product.id} className="card">
    <div className="caja-imagen-card">
      <img className="imagen-card" src={product.image} alt={product.name} />
    </div>
    <div className="info-card">
      <h2 className="titulo-card">{product.name}</h2>
      <p className="descripcion-card">{product.description}</p>
      <link to={`/detail/${product.id}`}>Ver Detalles</link>
    </div>
  </div>
  )
}

export default Item