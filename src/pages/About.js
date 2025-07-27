// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <section className="bg-white min-h-[80vh] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>

        {/* Introduction Paragraph */}
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Coding Ninjas is one of India's top tech education platforms. Our goal is to reduce the gap
          between what students learn in college and what the industry expects. We provide expert coding courses,
          live support from mentors, and help with getting jobs.
        </p>

        {/* Achievements Paragraph */}
        <p className="text-gray-600 text-lg mb-4 leading-relaxed">
          We have helped more than <span className="text-orange-500 font-semibold">100,000+</span> students
          get jobs at top tech companies like Google, Microsoft, Flipkart, and many others.
        </p>

        {/* Mission Statement */}
        <p className="text-gray-600 text-lg leading-relaxed">
          Our mission is simple:
          <span className="italic text-orange-600">
            {" "}to make tech education accessible, affordable, and focused on real results.
          </span>
        </p>

      </div>
    </section>
  );
};

export default About;
