import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg"; // Make sure this exists

function Hero() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center relative flex flex-col justify-start pt-32 px-6"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative max-w-lg text-left text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-pink-500">Josephine's Empire</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover Fashion, Elegance, and Style that defines YOU.
        </p>
        <Link
          to="/shop"
          className="px-6 py-3 rounded-full bg-blue-600 text-white text-lg font-semibold shadow-md hover:bg-blue-700 transition"
        >
          Let’s Shop
        </Link>
      </div>
    </section>
  );
}

export default Hero;
