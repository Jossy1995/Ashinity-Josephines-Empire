import { Link } from "react-router-dom";
import '../styles/Login.css';

export default function Login() {
  return (
    <div className="login-container">
      <h1>Welcome back! Login here</h1>

      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>

      <p>
        Don’t have an account? <Link className="signup-link" to="/signup">Signup</Link>
      </p>
    </div>
  );
}
