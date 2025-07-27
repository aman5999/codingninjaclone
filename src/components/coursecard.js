import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, desc, image, price }) => {
  // Format the URL path based on the course title
  const coursePath = `/courses/${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="bg-white rounded shadow p-3 hover:shadow-md transition-all text-sm">
      
      {/* Course Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-28 object-cover rounded"
      />

      {/* Course Title */}
      <h3 className="mt-2 font-semibold text-gray-800">{title}</h3>

      {/* Course Description */}
      <p className="mt-1 text-gray-600">{desc}</p>

      {/* Course Price */}
      <p className="mt-1 text-orange-600 font-bold">{price}</p>

      {/* Know More Button */}
      <Link
        to={coursePath}
        className="inline-block mt-3 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-xs"
      >
        Know More
      </Link>
    </div>
  );
};

export default CourseCard;
