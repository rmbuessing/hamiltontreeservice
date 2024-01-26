import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const [activeTab, setActiveTab] = useState(() => {
    const pathname = location.pathname;
    if (pathname === "/contact") {
      return "Contact-Us-tab";
    }
    if (pathname === "/inventory") {
      return "Our-Inventory-tab";
    }
    return "Home-tab";
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    // Delay the state update to allow the CSS transition to take effect
    setTimeout(() => {
      setIsMenuOpen(!isMenuOpen);
    }, 10);

    // Lock body scroll when sidebar is open
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header className="bg-white border-b-2 border-gray-300 py-3 md:py-5">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-blue-500 text-center font-logo ml-4">
          <div className="text-4xl font-bold mb-1">A1</div>
          <div className="text-4xl font-bold">Truck & Van Wrecking</div>
        </div>
        <ul className="hidden md:flex md:space-x-16 md:justify-center md:items-center">
          <li>
            <NavLink
              exact
              to="/"
              className={`text-black text-3xl font-bold transition duration-200 ${
                activeTab === "Home-tab" ? 'text-blue-500 border-b-2 border-blue-500 pb-2' : 'hover:border-b-2 hover:border-blue-500 pb-2'}
              `}
              onClick={() => {
                setActiveTab("Home-tab");
                toggleMenu();
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={`text-black text-3xl font-bold transition duration-200 ${
                activeTab === "Contact-Us-tab" ? 'text-blue-500 border-b-2 border-blue-500 pb-2' : 'hover:border-b-2 hover:border-blue-500 pb-2'}
              `}
              onClick={() => {
                setActiveTab("Contact-Us-tab");
                toggleMenu();
              }}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
          <NavLink
            to="http://search8421.used-auto-parts.biz/inventory/retail.htm"
            className={`text-black text-3xl font-bold transition duration-200 ${
              activeTab === "Our-Inventory-tab"
                ? 'text-blue-500 border-b-2 border-blue-500 pb-2'
                : 'hover:border-b-2 hover:border-blue-500 pb-2'
            }`}
            onClick={() => {
              setActiveTab("Our-Inventory-tab");
              toggleMenu();

              // Redirect to the specified URL
              window.location.href = "http://search8421.used-auto-parts.biz/inventory/retail.htm";
            }}
          >
            Our Inventory
          </NavLink>
          </li>
        </ul>
        <div className="hidden md:flex md:flex-col md:items-end md:justify-end">
          {/* Hide on screens smaller than medium */}
          <p className="text-black text-lg font-semibold mr-12 hidden md:block" style={{ fontSize: '1.5rem' }}>
            Call Us: (480) 983-0511
          </p>
          <p className="text-black text-sm mr-12 hidden md:block" style={{ fontSize: '1.25rem' }}>
            Mon - Fri: 8:00 AM - 5:00 PM
          </p>
          <p className="text-black text-sm mr-12 hidden md:block" style={{ fontSize: '1.25rem' }}>
            Sat: 8:00 AM - 1:00 PM Sun: Closed
          </p>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black text-5xl sm:text-5xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="sidebar-container">
          <div className="overlay" onClick={toggleMenu}></div>
          <div className={`sidebar ${isMenuOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <button className="sidebar-close" onClick={toggleMenu}>
              {/* Make close icon ("x") bigger */}
              <span className="text-5xl">&times;</span>
            </button>
            <ul className="mt-2 space-y-2">
              <li>
                <NavLink
                  exact
                  to="/"
                  className={`text-black text-3xl font-bold transition duration-200 ${
                    activeTab === "Home-tab" ? 'text-blue-500 border-b-2 border-blue-500 pb-2' : 'hover:border-b-2 hover:border-blue-500 pb-2'}
                  `}
                  onClick={() => {
                    setActiveTab("Home-tab");
                    toggleMenu();
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={`text-black text-3xl font-bold transition duration-200 ${
                    activeTab === "Contact-Us-tab" ? 'text-blue-500 border-b-2 border-blue-500 pb-2' : 'hover:border-b-2 hover:border-blue-500 pb-2'}
                  `}
                  onClick={() => {
                    setActiveTab("Contact-Us-tab");
                    toggleMenu();
                  }}
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="http://search8421.used-auto-parts.biz/inventory/retail.htm"
                  className={`text-black text-3xl font-bold transition duration-200 ${
                    activeTab === "Our-Inventory-tab" ? 'text-blue-500 border-b-2 border-blue-500 pb-2' : 'hover:border-b-2 hover:border-blue-500 pb-2'}
                  `}
                  onClick={() => {
                    setActiveTab("Our-Inventory-tab");
                    toggleMenu();
                  }}
                >
                  Our Inventory
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
