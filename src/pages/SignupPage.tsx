import { Link } from "react-router-dom";
import "../styles/SignUp.css";

export default function Signup() {
  return (
    <div className="signup-container">
      <h3>Welcome! Let's get you started.</h3>
      <p>Sign up now.</p>

      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Signup</button>
      </form>

      <p>
        Already have an account? <Link className="login-link" to="/login">Login</Link>
      </p>
    </div>
  );
}