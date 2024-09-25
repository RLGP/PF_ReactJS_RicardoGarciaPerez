import { BsCart4 } from "react-icons/bs";
function CartWidget() {
  return (
    <div className="carrito">
        <BsCart4   size="50px"/>
        <span className="badge">5</span>
    </div>
  )
}

export default CartWidget