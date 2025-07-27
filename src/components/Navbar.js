import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setOpenDropdown(null); // Close dropdowns on toggle
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-orange-600">
          <img
            src="https://ninjasfiles.s3.amazonaws.com/0000000000000723.jpg"
            alt="Coding Ninjas Logo"
            className="h-8"
          />
        </Link>

        {/* Hamburger Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-orange-500 font-medium">Home</Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => toggleDropdown("bootcamp")}
              className="hover:text-orange-500 font-medium"
            >
              Job Bootcamp ▾
            </button>
            {openDropdown === "bootcamp" && (
              <div className="absolute top-10 left-0 bg-white border shadow p-2 rounded w-48 z-50">
                <Link to="/courses/fullstack" className="block px-4 py-2 hover:bg-gray-100">Full Stack</Link>
                <Link to="/courses/datasci" className="block px-4 py-2 hover:bg-gray-100">Data Science</Link>
              </div>
            )}
          </div>
          <Link to="/courses" className="hover:text-orange-500 font-medium">Courses</Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => toggleDropdown("certification")}
              className="hover:text-orange-500 font-medium"
            >
              IIT Certifications ▾
            </button>
            {openDropdown === "certification" && (
              <div className="absolute top-10 left-0 bg-white border shadow p-2 rounded w-48 z-50">
                <a href="https://www.iitm.ac.in/" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">IIT Madras</a>
                <a href="https://www.iitr.ac.in/" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">IIT Roorkee</a>
              </div>
            )}
          </div>
          <Link to="/contact" className="hover:text-orange-500 font-medium">Contact</Link>
          <Link
            to="/login"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-medium"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 flex flex-col space-y-4">
          <Link to="/" onClick={toggleMenu} className="hover:text-orange-500 font-medium">Home</Link>
          <Link to="/courses/fullstack" onClick={toggleMenu} className="hover:text-orange-500 font-medium">Full Stack</Link>
          <Link to="/courses/datasci" onClick={toggleMenu} className="hover:text-orange-500 font-medium">Data Science</Link>
          <Link to="/courses" onClick={toggleMenu} className="hover:text-orange-500 font-medium">Courses</Link>
          <a href="https://www.iitm.ac.in/" target="_blank" rel="noreferrer" className="hover:text-orange-500 font-medium">IIT Madras</a>
          <a href="https://www.iitr.ac.in/" target="_blank" rel="noreferrer" className="hover:text-orange-500 font-medium">IIT Roorkee</a>
          <Link to="/contact" onClick={toggleMenu} className="hover:text-orange-500 font-medium">Contact</Link>
          <Link
            to="/login"
            onClick={toggleMenu}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-medium text-center"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
