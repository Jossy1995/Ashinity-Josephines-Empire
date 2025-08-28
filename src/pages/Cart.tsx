import type { CartItem } from "../App";

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

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div>
      <h1>Add you favorites to your Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.description}</p>
          <p>${item.price}</p>
          <input
            type="number"
            min={1}
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, +e.target.value)}
          />
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
      <button onClick={clearCart}>Clear Cart</button>
    </div>

    
  );
}
