// src/components/Layout.tsx
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  const location = useLocation();

  // Hide Navbar only on Landing page
  const hideNavbar = location.pathname === "/";

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <main className={!hideNavbar ? "pt-16 p-4" : "p-4"}> 
        <Outlet />
      </main>
    </div>
  );
}
