import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <h3>Welcome! Lets get you started. </h3>

      <p>Sign up now.</p>
      <form>
        <input type="text" placeholder="Name" /> <br />
        <input type="email" placeholder="Email" /> <br />
        <input type="password" placeholder="Password" /> <br />
        <button type="submit">Signup</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
