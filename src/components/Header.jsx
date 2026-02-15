import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // [BUG - LAYERS] '-z-50' places the header behind the page content.
    // [FIX] <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
    <header className="fixed w-full bg-white/90 backdrop-blur-sm -z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">CorpUI</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {/* [BUG - COLOR] 'text-white' on white background makes links invisible. */}
            {/* [FIX] <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium">Features</a> */}
            <a href="#features" className="text-white hover:text-blue-600 font-medium">Features</a>
            <a href="#pricing" className="text-white hover:text-blue-600 font-medium">Pricing</a>
            <a href="#about" className="text-white hover:text-blue-600 font-medium">About</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 font-medium hover:text-blue-600">Login</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 text-2xl">
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;