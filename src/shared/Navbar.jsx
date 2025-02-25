import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative bg-white shadow dark:bg-[#010313]">
      <div className="container px-10 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center justify-between">
            <a className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200" href="/" aria-label="Home">
              <span className="text-blue-600">Easy</span> Cash
            </a>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile and Desktop Menu */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-[#010313] lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            {/* Navigation Links */}
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <NavLink href="/"  text="Home" />
              <NavLink href="/services" text="Services" />
              <NavLink href="campaign" text="Campaign" />
              <NavLink href="help" text="Help" />
              <NavLink href="about" text="About" />
            </div>

            {/* User Profile and Notifications */}
            <div className="flex items-center mt-4 lg:mt-0">
              <button className="border rounded-full focus:outline-none mr-6">dar</button>
              <Link to={'/signin'} className="border rounded-2xl focus:outline-none hover:bg-amber-700 font-semibold hover:text-black px-5 py-2">Sign in</Link>
              {/* profile */}
              {/* <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="Toggle profile dropdown"
              >

                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="object-cover w-full h-full"
                    alt="User Avatar"
                  />
                </div>
                <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                  Khatab wedaa
                </h3>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Reusable NavLink Component
const NavLink = ({ href, text }) => (
  <a
    href={href}
    className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
  >
    {text}
  </a>
);

export default Navbar;