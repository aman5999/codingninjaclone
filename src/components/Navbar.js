import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const dropdownRef = useRef(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

        {/* Navigation */}
        <div className="flex space-x-6 items-center">

          <Link to="/" className="hover:text-orange-500 font-medium">Home</Link>

          {/* Job Bootcamp Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => toggleMenu('bootcamp')}
              className="hover:text-orange-500 font-medium"
            >
              Job Bootcamp ▾
            </button>
            {openMenu === 'bootcamp' && (
              <div className="absolute top-10 left-0 bg-white border shadow p-2 rounded w-48 z-50">
                <Link to="/courses/fullstack" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>
                  Full Stack
                </Link>
                <Link to="/courses/datasci" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>
                  Data Science
                </Link>
              </div>
            )}
          </div>

          <Link to="/courses" className="hover:text-orange-500 font-medium">Courses</Link>

          {/* IIT Certifications Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => toggleMenu('certification')}
              className="hover:text-orange-500 font-medium"
            >
              IIT Certifications ▾
            </button>
            {openMenu === 'certification' && (
              <div className="absolute top-10 left-0 bg-white border shadow p-2 rounded w-48 z-50">
                <a href="https://www.iitm.ac.in/" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">IIT Madras</a>
                <a href="https://www.iitr.ac.in/" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">IIT Roorkee</a>
              </div>
            )}
          </div>

          {/* Contact Link */}
          <Link to="/contact" className="hover:text-orange-500 font-medium">Contact</Link>

          <Link
            to="/login"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
