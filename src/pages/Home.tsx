import { Link } from "react-router-dom";
import Bag1 from "../assets/Products/bag1.jpg";
import Cloth1 from "../assets/Products/cloth1.jpg";
import Shoe1 from "../assets/Products/shoe1.jpg";
import '../styles/Home.css';

export default function Hom() {
  return (
    <div className="home-container">
      <h1>A world of fashion. Nothing beats confidence and elegance.</h1>
      <p>Discover the latest trends in style and confidence.</p>

      <div className="product-images">
        <img src={Bag1} alt="Bags" />
        <img src={Cloth1} alt="Clothes" />
        <img src={Shoe1} alt="Shoes" />
      </div>

      <Link className="signup-link" to="/signup">
        Don’t have an account? Signup
      </Link>
    </div>
  );
}
