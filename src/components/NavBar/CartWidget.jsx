// components/NavBar/CartWidget.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart4 } from "react-icons/bs";
import { useCart } from './CartContext';

function CartWidget() {
  const { getCartItemCount } = useCart();
  const itemCount = getCartItemCount();

  return (
    <Link to="/checkout" className="carrito">
      <BsCart4 size="50px" />
      {itemCount > 0 && <span className="badge">{itemCount}</span>}
    </Link>
  );
}

export default CartWidget;