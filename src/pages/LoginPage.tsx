import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1>Welcom back! Login here </h1>
      <form>
        <input type="email" placeholder="Email" /> <br />
        <input type="password" placeholder="Password" /> <br />
        <button type="submit">Login</button>
      </form>

      <p>
        Don’t have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}
