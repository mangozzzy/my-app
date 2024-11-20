import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm text-gray-400">
            TrendyWear is your one-stop shop for the latest fashion trends. 
            Stay stylish, stay comfortable.
          </p>
        </div>

        {/* Customer Service Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Customer Service</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#help" className="hover:text-gray-300">
                Help Center
              </a>
            </li>
            <li>
              <a href="#shipping" className="hover:text-gray-300">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-gray-300">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Shop Categories</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#mens" className="hover:text-gray-300">
                Men's Clothing
              </a>
            </li>
            <li>
              <a href="#womens" className="hover:text-gray-300">
                Women's Clothing
              </a>
            </li>
            <li>
              <a href="#accessories" className="hover:text-gray-300">
                Accessories
              </a>
            </li>
            <li>
              <a href="#sale" className="hover:text-gray-300">
                Sale
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to get the latest updates on new arrivals and special discounts.
          </p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-sm text-gray-300 focus:outline-none focus:ring focus:ring-gray-500"
            />
            <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <div className="flex justify-center space-x-6 text-gray-400">
          <a href="#facebook" className="hover:text-white">
            Facebook
          </a>
          <a href="#instagram" className="hover:text-white">
            Instagram
          </a>
          <a href="#twitter" className="hover:text-white">
            Twitter
          </a>
          <a href="#pinterest" className="hover:text-white">
            Pinterest
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          © 2024 TrendyWear. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
