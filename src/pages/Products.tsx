import { Link } from "react-router-dom";
import type { CartItem } from "../App";

interface ProductsProps {
  addToCart: (product: CartItem) => void; // TS requires this, even if not used
}

export default function ProductsPage({ addToCart: _addToCart }: ProductsProps) {
  const categories = ["clothes", "shoes", "bags"];

  return (
    <div>
      <h1>Product Categories</h1>
      {categories.map((category) => (
        <div key={category}>
          <Link to={`/products/${category}`}>
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
