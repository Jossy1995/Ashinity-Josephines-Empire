import { Link } from "react-router-dom";
import '../styles/Products.css';
import type { CartItem } from "../App";

// Import images
import ClothesImg from "../assets/ProductCategory/clothCategory.jpg";
import ShoesImg from "../assets/ProductCategory/shoeCategory.jpg";
import BagsImg from "../assets/ProductCategory/bagCategory.jpg";

interface ProductsProps {
  addToCart: (product: CartItem) => void;
}

export default function ProductsPage({ addToCart: _addToCart }: ProductsProps) {
  const categories = [
    { name: "clothes", img: ClothesImg },
    { name: "shoes", img: ShoesImg },
    { name: "bags", img: BagsImg }
  ];

  return (
    <div className="products-container">
      <h1>Product Categories</h1>
      <div className="categories">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/products/${category.name}`}
            className="category-card"
          >
            <h2>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</h2>
            <img src={category.img} alt={category.name} />
          </Link>
        ))}
      </div>
    </div>
  );
}
