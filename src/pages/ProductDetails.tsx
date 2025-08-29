import { useParams } from "react-router-dom";
import type { CartItem } from "../App";
import productsData from "../data/Products";
import "../styles/ProductDetails.css";

interface ProductDetailsProps {
  addToCart: (product: CartItem) => void;
}

export default function ProductDetails({ addToCart }: ProductDetailsProps) {
  const { category, slug } = useParams<{ category: string; slug: string }>();

  if (!category || !slug) return <p>Product not found</p>;

  const products = productsData[category as keyof typeof productsData];
  const product = products.find((p) => p.slug === slug);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <p>ID: <span>{product.id}</span></p>
        <p>DESCRIPTION: <span>{product.description}</span></p>
        <p>PRICE: <span>${product.price}</span></p>
        <button onClick={() => addToCart({ ...product, quantity: 1 })}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
