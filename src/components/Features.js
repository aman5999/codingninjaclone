import React from 'react';

const features = [
  {
    title: 'Expert Faculty',
    desc: 'Learn from industry veterans and alumni from top tech companies.',
  },
  {
    title: 'Hands-on Projects',
    desc: 'Get practical experience with real-world coding assignments.',
  },
  {
    title: 'Placement Assistance',
    desc: 'Dedicated career support including mock interviews and resume building.',
  },
  {
    title: 'Structured Curriculum',
    desc: 'A step-by-step, beginner-friendly curriculum that works.',
  },
];

const Features = () => {
  return (
    <section className="bg-gray-100 py-14 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Why Choose Our Platform?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-orange-500">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
