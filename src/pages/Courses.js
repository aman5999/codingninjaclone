import React from 'react';
import CourseCard from '../components/coursecard';

// Importing course images
import fullst from '../images/fullst.png';
import datasc from '../images/datasc.jpg';
import cp from '../images/cp.jpg';
import andr from '../images/andr.jpg';

// Array of course objects
const courses = [
  {
    title: 'Full Stack Web Development',
    desc: 'Master HTML, CSS, JavaScript, React, Node.js and build full web apps.',
    image: fullst,
    price: '₹9,999',
  },
  {
    title: 'Data Science & Machine Learning',
    desc: 'Learn Python, statistics, ML algorithms, and data visualization.',
    image: datasc,
    price: '₹11,999',
  },
  {
    title: 'Competitive Programming',
    desc: 'Sharpen your problem-solving skills for coding contests & interviews.',
    image: cp,
    price: '₹5,999',
  },
  {
    title: 'Android Development',
    desc: 'Build real-world Android apps using Kotlin and Android Studio.',
    image: andr,
    price: '₹7,999',
  },
];

// Functional component to show list of all courses
const Courses = () => {
  return (
    <section className="py-16 bg-gray-100 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Our Courses
        </h2>

        {/* Grid of course cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            // Pass all properties using spread operator
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
