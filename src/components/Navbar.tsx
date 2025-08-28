import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Josephine's Empire Logo" 
              className="h-10 w-auto object-contain" 
            />
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/home" 
              className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Home
            </Link>

            <Link 
              to="/about" 
              className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              About Us
            </Link>

            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Contact
            </Link>

            <Link 
              to="/products" 
              className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Products
            </Link>
            
            <Link 
              to="/cart" 
              className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition duration-300 flex items-center"
            > 
              <svg 
                className="w-5 h-5 mr-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              > 
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6h9m-9 0a2 2 0 100 4 2 2 0 000-4zm9 0a2 2 0 100 4 2 2 0 000-4z" 
                /> 
              </svg> 
              Cart 
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link 
              to="/cart" 
              className="bg-emerald-600 text-white px-3 py-2 rounded-md hover:bg-emerald-700 transition duration-300 flex items-center mr-3"
            > 
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              > 
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6h9m-9 0a2 2 0 100 4 2 2 0 000-4zm9 0a2 2 0 100 4 2 2 0 000-4z" 
                /> 
              </svg> 
            </Link>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-700 hover:text-emerald-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/home" 
                className="block text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-base font-medium" 
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <Link 
                to="/about" 
                className="block text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-base font-medium" 
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              <Link 
                to="/contact" 
                className="block text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-base font-medium" 
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <Link 
                to="/products" 
                className="block text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-base font-medium" 
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>

              <Link 
                to="/cart" 
                className="block bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition duration-300 mt-4 flex items-center justify-center" 
                onClick={() => setIsMenuOpen(false)}
              >
                <svg 
                  className="w-5 h-5 mr-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                > 
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6h9m-9 0a2 2 0 100 4 2 2 0 000-4zm9 0a2 2 0 100 4 2 2 0 000-4z" 
                  /> 
                </svg> 
                View Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;