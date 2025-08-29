import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css"; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar-contaainer">
      <div>
        <div>
          {/* Logo */}
          <div>
           <img src={logo} alt="Logo" />
          </div>

          {/* Desktop Navigation */}
          <div>
            <Link to="/home">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/products">Products Detail</Link>
            <Link to="/cart">Cart</Link>
          </div>

          {/* Mobile menu button */}
          <div>
            <Link to="/cart">Cart</Link>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? "X" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div>
            <Link to="/home" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Link to="/products" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
              View Cart
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
