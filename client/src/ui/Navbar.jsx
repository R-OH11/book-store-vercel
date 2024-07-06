import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#535353] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div
              className="flex justify-start items-center gap-3 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src="/images/logo_waterstones.png"
                className="w-12 h-12 object-cover"
              />
              <span className="font-bold text-xl">Waterstones</span>
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Books
                </a>
                <a
                  href="#"
                  className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Categories
                </a>
                <a
                  href="#"
                  className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-4 flex items-center md:ml-6">
              <a
                href="/login"
                className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Login
              </a>
              <a
                href="/admin_login"
                className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Login as Admin
              </a>
              <a
                href="/signup"
                className="bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium ml-2 cursor-pointer"
              >
                Sign Up
              </a>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-300 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Books
            </a>
            <a
              href="#"
              className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Categories
            </a>
            <a
              href="#"
              className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="/login"
              className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </a>
            <a
              href="/admin_login"
              className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Login as Admin
            </a>
            <a
              href="/signup"
              className="bg-blue-600 hover:bg-blue-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
