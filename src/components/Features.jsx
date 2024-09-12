import React from 'react';
import { motion } from 'framer-motion';

const featuresList = [
  {
    title: 'Student Enrollment',
    description: 'Easily manage student registration and admission processes with our streamlined enrollment system.',
    icon: '🎓',
  },
  {
    title: 'Attendance Tracking',
    description: 'Track student attendance automatically and generate reports with ease.',
    icon: '📅',
  },
  {
    title: 'Grade Management',
    description: 'Simplify the process of grade recording, distribution, and analysis for students and teachers.',
    icon: '📊',
  },
  {
    title: 'Class Scheduling',
    description: 'Create and manage class schedules, ensuring a smooth flow of the academic year.',
    icon: '🕒',
  },
  {
    title: 'Teacher Management',
    description: 'Organize teacher profiles, track performance, and assign courses efficiently.',
    icon: '👩‍🏫',
  },
  {
    title: 'Parent-Teacher Communication',
    description: 'Facilitate open communication between parents and teachers for better student outcomes.',
    icon: '💬',
  },
];

const Features = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {featuresList.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;