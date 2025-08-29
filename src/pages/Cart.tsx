import type { CartItem } from "../App";
import "../styles/Cart.css";

interface CartProps {
  cart: CartItem[];
  updateQuantity: (id: number, qty: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export default function Cart({
  cart,
  updateQuantity,
  removeFromCart,
  clearCart,
}: CartProps) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0)
    return <p className="cart-title">Your cart is empty.</p>;

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, +e.target.value)}
              />
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
      </div>

      <button className="clear-cart-btn" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
}
