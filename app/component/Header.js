import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-pink-200 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
      <Link href="/">
        <h1 className="text-gray-400 text-xl font-bold cursor-pointer">スンちゃんのcloset!</h1>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-gray-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
