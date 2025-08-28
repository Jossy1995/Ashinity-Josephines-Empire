import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1>A world of fashion. Nothing beats confidence and elegance.</h1>
      

      <p>
        Don’t have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}
