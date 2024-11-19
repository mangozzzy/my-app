import React from 'react';

const Header = () => {
  return (
    <header className="bg-pink-200 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-gray-400 text-xl font-bold">スンちゃんのcloset!</h1>
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
