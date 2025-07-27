import React from 'react';
import { Link } from 'react-router-dom';

// Import social media logos
import instagramLogo from '../images/img6.jpg';
import twitterLogo from '../images/img7.jpg';
import linkedinLogo from '../images/img8.png';

const Footer = () => {
  return (
    <footer className="bg-[#0f1115] text-gray-300 py-10 px-4 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/*  Logo and Description Section */}
        <div>
          <img
            src="https://ninjasfiles.s3.amazonaws.com/0000000000000723.jpg"
            alt="Coding Ninjas Logo"
            className="h-10 mb-4"
          />
          <p className="text-sm">
            Coding Ninjas is a modern tech education platform helping students build real-world skills.
          </p>
        </div>

        {/*  Company Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-white">About Us</Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-white">Courses</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">Privacy Policy</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-white">Careers</Link>
            </li>
          </ul>
        </div>

        {/*  Social Media Links with Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <img src={instagramLogo} alt="Instagram" className="h-6 w-6" />
              <a href="#" className="hover:text-white">Instagram</a>
            </li>
            <li className="flex items-center space-x-3">
              <img src={twitterLogo} alt="Twitter" className="h-6 w-6" />
              <a href="#" className="hover:text-white">Twitter</a>
            </li>
            <li className="flex items-center space-x-3">
              <img src={linkedinLogo} alt="LinkedIn" className="h-6 w-6" />
              <a href="https://www.linkedin.com/in/amanpatel123/" className="hover:text-white">LinkedIn</a>
            </li>
          </ul>
        </div>

      </div>

      {/*  Footer Bottom Text */}
      <div className="text-center mt-10 text-sm text-gray-500 space-y-1">
        <p>© {new Date().getFullYear()} Coding Ninjas Clone. All rights reserved.</p>
        <p>Created by <span className="text-white font-medium">Aman Patel</span></p>
      </div>
    </footer>
  );
};

export default Footer;
