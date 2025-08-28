import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <img src="/assets/landing.jpg" alt="Brand" style={{ width: "300px", borderRadius: "10px" }} />
      <h1>Welcome to JOSEPHINE'S EMPIRE </h1>
      <p>Your one-stop fashion store for elegant collections.</p>
      <Link to="/home">Go to Website</Link>
    </div>
  );
}
