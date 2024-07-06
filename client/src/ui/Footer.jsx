import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 w-full text-white py-8">
      <div className="container px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2 flex gap-3 justify-start items-center">
              <img
                src="/images/logo_waterstones.png"
                className="w-12 h-12 object-cover"
              />
              Waterstones Booksellers Limited
            </h2>
            <p className="text-sm">Founded in 1986</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm flex  flex-col gap-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <FaFacebook className="cursor-pointer hover:text-blue-800" />
              <FaTwitter className="cursor-pointer hover:text-blue-800" />
              <FaInstagram className="cursor-pointer hover:text-blue-800" />
            </div>
          </div>
        </div>
        <div className="mt-8 text-sm text-start">
          <p>
            &copy; {currentYear} Waterstones Booksellers Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
