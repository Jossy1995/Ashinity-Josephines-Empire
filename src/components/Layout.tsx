// src/components/Layout.tsx
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"; // import Footer

export default function Layout() {
  const location = useLocation();

  // Hide Navbar and Footer only on Landing page
  const hideLayoutElements = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayoutElements && <Navbar />}
      
      <main className={!hideLayoutElements ? "pt-16 p-4 flex-grow" : "p-4 flex-grow"}>
        <Outlet />
      </main>

      {!hideLayoutElements && <Footer />}
    </div>
  );
}
