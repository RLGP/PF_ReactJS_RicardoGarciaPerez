// src/components/ItemDetail/ItemDetail.jsx
import React, { useState, useEffect } from 'react';
import { useCart } from '../NavBar/CartContext';
import "../ItemList/Style.css";

const ItemDetail = ({ producto, isLoading }) => {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');
  const { addToCart, cart } = useCart();

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (isLoading) {
    return <h2 className="bg-info">Loading...</h2>;
  }

  const cartItem = cart.find(item => item.id === producto.id);
  const cartItemQuantity = cartItem ? cartItem.quantity : 0;
  const availableStock = producto.stock - cartItemQuantity;

  const handleIncrement = () => {
    if (quantity < availableStock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity <= availableStock) {
      addToCart(producto, quantity);
      setMessage(`${quantity} ${producto.name}(s) añadido al carrito`);
    } else {
      setMessage(`Disculpe, solo ${availableStock} item(s) disponible.`);
    }
  };

  const isStockAvailable = availableStock > 0;
  const isMaxQuantity = quantity >= availableStock;

  return (
    <>
      {message && (
        <div className="alert alert-info text-center" style={{position: 'sticky', top: 0, zIndex: 1000}}>
          {message}
        </div>
      )}
      <div className="carta mb-3">
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
              <p className="card-text">{producto.description}</p>
              <p className="precio">Precio $ {producto.price}</p>
              <p className="stock">Disponible en Stock: {availableStock}</p>
              <div className="quantity-control">
                <button 
                  onClick={handleDecrement} 
                  className="btn btn-primary"
                  disabled={quantity === 1}
                >
                  -
                </button>
                <span className="quantity">{quantity}</span>
                <button 
                  onClick={handleIncrement} 
                  className="btn btn-primary"
                  disabled={isMaxQuantity}
                >
                  +
                </button>
              </div>
              <button 
                onClick={handleAddToCart} 
                className="btn btn-primary me-2 mt-200" 
                disabled={!isStockAvailable}
              >
                {isStockAvailable ? 'Comprar' : 'Sin Stock'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetail