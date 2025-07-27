import React from 'react';

// Import company logo images
import googleLogo from '../images/img1.png';
import microsoftLogo from '../images/img2.png';
import flipkartLogo from '../images/img3.png';
import samsungLogo from '../images/img4.png';
import walmartLogo from '../images/img5.png';

// List of companies with names and logos
const companyList = [
  { name: 'Google', logo: googleLogo },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Flipkart', logo: flipkartLogo },
  { name: 'Samsung', logo: samsungLogo },
  { name: 'Walmart', logo: walmartLogo },
];

const CompanyLogos = () => {
  return (
    <div className="bg-white py-12 px-6">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-10">
        Trusted by students placed in
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center">
        {companyList.map((company, index) => (
          <img
            key={index}
            src={company.logo}
            alt={company.name}
            className="h-16 object-contain grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
