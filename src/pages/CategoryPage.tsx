import { useParams, Link } from "react-router-dom";
import type { CartItem } from "../App";
import productsData from "../data/Products";
import "../styles/Category.css";


interface CategoryPageProps {
  addToCart: (product: CartItem) => void;
}

export default function CategoryPage({ addToCart }: CategoryPageProps) {
  const { category } = useParams<{ category: string }>();

  if (!category) return <p className="text-center mt-10 text-red-500">Category not found</p>;

  const products = productsData[category as keyof typeof productsData];

  if (!products || products.length === 0)
    return <p className="text-center mt-10 text-gray-500">No products in this category.</p>;

  return (
    <div className="category-container">
      <h1 className="category-title">{category}</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/products/${category}/${product.slug}`}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
            </Link>
            <p>${product.price}</p>
            <button onClick={() => addToCart({ ...product, quantity: 1 })}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
