import { useParams } from "react-router-dom";
import type { CartItem } from "../App";
import productsData from "../data/Products";

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
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt="" style={{ width: "300px" }} />
      <p>ID :{product.id} </p>
      <p> DESCRIPTION : {product.description}</p>
      <p> PRICE : ${product.price}</p>
      <button onClick={() => addToCart({ ...product, quantity: 1 })}>
        Add to Cart
      </button>
    </div>
  );
}
