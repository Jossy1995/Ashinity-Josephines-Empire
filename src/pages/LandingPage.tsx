import { Link } from "react-router-dom";
import "../styles/Landing.css";
import landingImg from "../assets/landing.jpg";


export default function Landing() {
  return (
    <div className="landing">
      <div className="landing-image">
        <img src={landingImg} alt="Brand" />
        <div className="image-text">
          <h1>Welcome to JOSEPHINE'S EMPIRE</h1>
        </div>
      </div>

      <div className="landing-content">
        <h2> Your one-stop fashion store for elegant collections.</h2>
        <p>Discover Fashion, Elegance, and Style that defines YOU.</p>
        <Link to="/home">Let's shop now on our Website</Link>
      </div>
    </div>
  );
}
