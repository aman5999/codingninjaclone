// src/pages/CourseDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Dummy course data
const courseData = {
  'full-stack-web-development': {
    title: 'Full Stack Web Development',
    desc: 'Master HTML, CSS, JavaScript, React, Node.js and build full web apps.',
    image: require('../images/fullst.png'),
    price: '₹9,999',
    syllabus: [
      'HTML, CSS, JavaScript',
      'React & Tailwind CSS',
      'Node.js, Express, MongoDB',
      'Project: Full MERN Stack App',
    ],
  },
  'data-science-machine-learning': {
    title: 'Data Science & Machine Learning',
    desc: 'Learn Python, statistics, ML algorithms, and data visualization.',
    image: require('../images/datasc.jpg'),
    price: '₹11,999',
    syllabus: [
      'Python Programming',
      'Pandas, Numpy, Matplotlib',
      'ML Algorithms',
      'Capstone Project',
    ],
  },
  'competitive-programming': {
    title: 'Competitive Programming',
    desc: 'Sharpen your problem-solving skills for coding contests & interviews.',
    image: require('../images/cp.jpg'),
    price: '₹5,999',
    syllabus: [
      'Time & Space Complexity',
      'Recursion, DP, Graphs',
      'Codeforces & LeetCode Practice',
    ],
  },
  'android-development': {
    title: 'Android Development',
    desc: 'Build real-world Android apps using Kotlin and Android Studio.',
    image: require('../images/andr.jpg'),
    price: '₹7,999',
    syllabus: [
      'Kotlin Basics',
      'Android Studio UI Design',
      'Firebase Integration',
    ],
  },
};

const CourseDetail = () => {
  // Get the course ID from URL
  const { id } = useParams();

  // Get course data by ID
  const course = courseData[id];

  // If course doesn't exist
  if (!course) {
    return <div className="text-center p-10 text-gray-600">Course not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* Course Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover rounded"
      />

      {/* Title & Description */}
      <h1 className="text-3xl font-bold mt-6 text-gray-800">{course.title}</h1>
      <p className="mt-3 text-gray-700">{course.desc}</p>
      <p className="mt-2 text-xl font-semibold text-orange-600">
        Price: {course.price}
      </p>

      {/* Syllabus List */}
      <h2 className="mt-6 text-xl font-bold text-gray-800">Syllabus</h2>
      <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
        {course.syllabus.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Enroll Button */}
      <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded">
        Enroll Now
      </button>

      {/* Back Link */}
      <div className="mt-6">
        <Link to="/courses" className="text-orange-500 hover:underline">
          ← Back to Courses
        </Link>
      </div>
    </div>
  );
};

export default CourseDetail;
