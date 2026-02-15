import React, { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Product', 'Features', 'Pricing', 'Company', 'Blog'];

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 shadow-sm sticky top-0 z-50 backdrop-blur-md bg-white/80">
      <div className="flex items-center flex-shrink-0">
        <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          SaaSify
        </span>
      </div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow flex justify-end space-x-0 md:space-x-8 flex-col md:flex-row">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block py-2 md:py-0 px-3 md:px-0 rounded-md text-gray-600 hover:text-indigo-600 font-medium transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex gap-3 mt-4 md:mt-0 md:ml-4">
          <button className="text-indigo-600 hover:text-indigo-700 font-semibold py-2 px-4">
            Sign In
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
