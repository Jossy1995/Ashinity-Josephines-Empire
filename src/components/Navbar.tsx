import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar-container">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>JOSEPHINE'S EMPIRE</span>
      </div>

      {/* Desktop Navigation */}
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products Detail</Link>
        <Link to="/cart">Cart</Link>
      </div>

      {/* Mobile menu toggle */}
      <div className="mobile-toggle">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "X" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
          <Link to="/cart" onClick={() => setIsMenuOpen(false)}>Cart</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
