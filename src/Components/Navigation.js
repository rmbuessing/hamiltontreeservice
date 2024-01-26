import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import htsImage from '../Images/hts.jpeg';

const Navigation = () => {
  const location = useLocation();

  const [activeTab, setActiveTab] = useState(() => {
    const pathname = location.pathname;
    if (pathname === "/contact") {
      return "Contact-Us-tab";
    }
    if (pathname === "/our-work") {
      return "Our-work-tab";
    }
    return "Home-tab";
  });
  useEffect(() => {
    // Ensure that the body is scrollable when the location changes
    document.body.style.overflow = 'auto';
  }, [location]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header className="bg-white border-b-2 border-gray-300 py-1 sticky top-0 z-50"> {/* Sticky header */}
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex-1 md:flex-none text-center">
          <img src={htsImage} alt="HTS Logo" className="h-32 w-80 mx-auto md:m-0" />
        </div>
        <ul className="hidden md:flex md:space-x-16 md:justify-center md:items-center">
          <li>
            <NavLink
              exact
              to="/"
              className={`text-black text-3xl font-bold transition duration-200 ${activeTab === "Home-tab" ? 'text-fuchsia-500 border-b-2 border-fuchsia-500 pb-2' : 'hover:border-b-2 hover:border-fuchsia-500 pb-2'}`}
              onClick={() => handleTabClick("Home-tab")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-work"
              className={`text-black text-3xl font-bold transition duration-200 ${activeTab === "Our-work-tab" ? 'text-fuchsia-500 border-b-2 border-fuchsia-500 pb-2' : 'hover:border-b-2 hover:border-fuchsia-500 pb-2'}`}
              onClick={() => handleTabClick("Our-work-tab")}
            >
              Our Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={`text-black text-3xl font-bold transition duration-200 ${activeTab === "Contact-Us-tab" ? 'text-fuchsia-500 border-b-2 border-fuchsia-500 pb-2' : 'hover:border-b-2 hover:border-fuchsia-500 pb-2'}`}
              onClick={() => handleTabClick("Contact-Us-tab")}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="hidden md:flex md:flex-col md:items-end md:justify-end">
          <p className="text-black text-lg font-semibold mr-12 hidden md:block" style={{ fontSize: '1.5rem' }}>
            Call Us: (810) 291-0410
          </p>
          <p className="text-black text-sm mr-12 hidden md:block" style={{ fontSize: '1.25rem' }}>
            Mon - Sun: 8:00 AM - 8:00 PM
          </p>
          <p className="text-red-600 text-sm mr-12 hidden md:block" style={{ fontSize: '1.25rem' }}>
            24 Hour Emergency Service
          </p>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black text-5xl sm:text-5xl focus:outline-none mr-4">
            ☰
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="sidebar-container">
          <div className="overlay" onClick={toggleMenu}></div>
          <div className={`sidebar ${isMenuOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <button className="sidebar-close" onClick={toggleMenu}>
              <span className="text-5xl">&times;</span>
            </button>
            <ul className="mt-2 space-y-2">
              <li>
                <NavLink
                  exact
                  to="/"
                  className={`text-black text-3xl font-bold transition duration-200 ${activeTab === "Home-tab" ? 'text-fuchsia-500 border-b-2 border-fuchsia-500 pb-2' : 'hover:border-b-2 hover:border-fuchsia-500 pb-2'}`}
                  onClick={() => handleTabClick("Home-tab")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/our-work"
                  className={`text-black text-3xl font-bold transition duration-200 ${activeTab === "Our-Inventory-tab" ? 'text-fuchsia-500 border-b-2 border-fuchsia-500 pb-2' : 'hover:border-b-2 hover:border-fuchsia-500 pb-2'}`}
                  onClick={() => handleTabClick("Our-Inventory-tab")}
                >
                  Our Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={`text-black text-3xl font-bold transition duration-200 ${activeTab === "Contact-Us-tab" ? 'text-fuchsia-500 border-b-2 border-fuchsia-500 pb-2' : 'hover:border-b-2 hover:border-fuchsia-500 pb-2'}`}
                  onClick={() => handleTabClick("Contact-Us-tab")}
                >
                  Contact Us
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
