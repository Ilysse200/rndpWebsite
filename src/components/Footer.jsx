// src/components/Footer.jsx
import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"; 
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-700">About Us</h3>
          <p>We’re dedicated to delivering exceptional services and supporting the dairy sector development in Rwanda.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-700">Quick Links</h3>
          <ul className="space-y-2">
          <li>
            <Link to="/about" className="hover:text-orange-500 hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/strategy" className="hover:text-orange-500 hover:underline">
              Strategy
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-500 hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-700">Contact Info</h3>
          <ul className="space-y-2">
      <li className="flex items-center gap-2">
        <MapPin className="w-5 h-5 text-green-700 hover:text-orange-500 transition" />
        Kigali - Rwanda
      </li>
      <li className="flex items-center gap-2">
        <Phone className="w-5 h-5 text-green-700 hover:text-orange-500 transition" />
        +250 788 302613
      </li>
      <li className="flex items-center gap-2">
        <Mail className="w-5 h-5 text-green-700 hover:text-orange-500 transition" />
        info@rndp.rw
      </li>
    </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-700">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="https://x.com/home" className="text-green-700 hover:text-white bg-white hover:bg-green-700 p-2 rounded-full transition">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/" className="text-green-700 hover:text-white bg-white hover:bg-green-700 p-2 rounded-full transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" className="text-green-700 hover:text-white bg-white hover:bg-green-700 p-2 rounded-full transition">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/" className="text-green-700 hover:text-white bg-white hover:bg-green-700 p-2 rounded-full transition">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t mt-8 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} RNDP. All rights reserved.
      </div>
    </footer>
  );
}
