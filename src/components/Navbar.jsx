import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/RNDP_logo.jpeg"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="RNDP Logo" className="h-14 w-auto object-contain" />
          <span className="sr-only">Rwanda National Dairy Platform</span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-orange-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-orange-600">About</Link>
          <Link to="/strategy" className="text-gray-700 hover:text-orange-600">Strategy</Link>
          <Link to="/contact" className="text-gray-700 hover:text-orange-600">Contact</Link>
        </nav>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/strategy" className="block text-gray-700 hover:text-blue-600">Strategy</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
      )}
    </header>
  );
}
