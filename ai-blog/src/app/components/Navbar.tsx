"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-red-400 to-rose-500 text-white p-4 shadow-lg border-b-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="font-bold text-3xl">
           AI Blog
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:underline font-bold">
            Home
          </Link>
          <Link href="/About" className="hover:underline font-bold">
            About Us
          </Link>
          <Link href="/Contact" className="hover:underline font-bold">
            Contact
          </Link>
          <Link href="/create" className="hover:underline font-bold">
            Create Post
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4">
          <Link href="/" className="hover:underline font-bold">
            Home
          </Link>
          <Link href="/About" className="hover:underline font-bold">
            About Us
          </Link>
          <Link href="/Contact" className="hover:underline font-bold">
            Contact
          </Link>
          <Link href="/create" className="hover:underline font-bold">
            Create Post
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
