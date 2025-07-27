import React from 'react';
import { motion } from 'framer-motion';
import CompanyLogos from '../components/CompanyLogos';

const Home = () => {
  return (
    <>
      {/* ---------- HERO SECTION ---------- */}
      <section className="bg-gray-200 min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
        
        {/* Title with Animation */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Restricted by opportunities?
          <br />
          <span className="text-orange-500">
            Get the tech career you deserve. Faster.
          </span>
        </motion.h1>

        {/* Subtitle with Animation */}
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Coding Ninjas is a platform to learn coding from industry experts and kickstart your career.
        </motion.p>

        {/* CTA Button with Animation */}
        <motion.button
          className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg text-lg hover:bg-orange-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Offerings
        </motion.button>
      </section>

      {/* ---------- COMPANY LOGOS SECTION ---------- */}
      <CompanyLogos />
    </>
  );
};

export default Home;
