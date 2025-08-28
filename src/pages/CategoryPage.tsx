import { useParams, Link } from "react-router-dom";
import type { CartItem } from "../App";
import productsData from "../data/Products";

interface CategoryPageProps {
  addToCart: (product: CartItem) => void;
}

export default function CategoryPage({ addToCart }: CategoryPageProps) {
  const { category } = useParams<{ category: string }>();

  if (!category) return <p>Category not found</p>;

  const products = productsData[category as keyof typeof productsData];

  if (!products || products.length === 0) return <p>No products in this category.</p>;

  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      {products.map((product) => (
        <div
          key={product.id}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
        >
          <Link to={`/products/${category}/${product.slug}`}>
            <h2>{product.name}</h2>
          </Link>
          <img src={product.image} alt="" style={{ width: "300px" }} />
          <p>${product.price}</p>
          <button onClick={() => addToCart({ ...product, quantity: 1 })}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
