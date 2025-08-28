import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Contact from "./pages/ContactsPage";
import Layout from "./components/Layout";
import CategoryPage from "./pages/CategoryPage";
import ProductDetails from "./pages/ProductDetails";

// --- Type for cart items ---
export interface CartItem {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

function App() {
  // --- Cart state ---
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add product to cart
  const addToCart = (product: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prev, product];
    });
  };

  // Update quantity
  const updateQuantity = (id: number, qty: number) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  // Remove item
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear cart
  const clearCart = () => setCart([]);

  return (
    <div>
       <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/products/:category" element={<CategoryPage addToCart={addToCart} />}
        />
        <Route path="/products/:category/:slug" element={<ProductDetails addToCart={addToCart} />} />
        <Route path="/cart" element={ <Cart cart={cart} updateQuantity={updateQuantity}
              removeFromCart={removeFromCart} clearCart={clearCart} />
          } />
      </Route>
    </Routes>
    </div>
   
  );
}

export default App;
