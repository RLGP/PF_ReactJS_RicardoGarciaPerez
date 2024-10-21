import React, { useState } from 'react';
import { useCart } from '../NavBar/CartContext';
import { createOrder } from '../../firebase/firebase';
import '../ItemList/Style.css';

const Checkout = () => {
  const { cart, getCartTotal, clearCart, removeFromCart } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      setError('Su carrito está vacío. Por favor agregue productos antes de realizar la compra.');
      return;
    }

    if (email !== confirmEmail) {
      setError('Los correos electrónicos no coinciden. Por favor, verifique.');
      return;
    }

    setError(null);

    const order = {
      buyer: { name, email, phone, address },
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      date: new Date(),
      total: getCartTotal()
    };

    try {
      const newOrderId = await createOrder(order);
      setOrderId(newOrderId);
      clearCart();
      setName('');
      setEmail('');
      setConfirmEmail('');
      setPhone('');
      setAddress('');
      setShowPopup(true);
    } catch (error) {
      console.error("Error creating order: ", error);
      setError("Hubo un error al procesar su orden. Por favor, intente nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setOrderId(null);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <h2>Checkout</h2>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>¡Gracias por su compra!</h2>
              <p className='order-id'>Su número de orden es: {orderId}</p>
              <button onClick={handleClosePopup} className="close-popup-btn">
                Cerrar
              </button>
            </div>
          </div>
        )}
        {error && <div className="error-message">{error}</div>}
        <div className="cart-summary">
          <h3>Tu Carrito</h3>
          {cart.length === 0 ? (
            <p>Su carrito está vacío</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <span>{item.name}</span>
                <span>Cantidad: {item.quantity}</span>
                <span>Precio: ${item.price * item.quantity}</span>
                <button onClick={() => handleRemoveItem(item.id)} className="remove-item-btn">
                  Remover
                </button>
              </div>
            ))
          )}
          <div className="cart-total">
            <strong>Total: ${getCartTotal()}</strong>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="checkout-form">
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Confirmar Email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
          />
          <input
            type="tel "
            placeholder="Teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <textarea
            placeholder="Dirección"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        <button className="submit" type="submit" disabled={cart.length === 0}>
            {cart.length === 0 ? 'El Carrito está vacio' : 'Hacer Pedido'}
          </button>
        </form>
        
        {cart.length > 0 && (
          <button onClick={clearCart} className="clear-cart-btn">Vaciar Carrito</button>
        )}
        
      </div>
    </div>
  );
};

export default Checkout;