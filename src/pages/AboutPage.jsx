import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <h1 className="text-6xl font-bold text-center text-gray-800 mb-8">
        About Our School Management System
      </h1>
      
      <p className="text-lg text-gray-600 mb-6">
        Welcome to our School Management System! Our platform is designed to streamline the management of student information, courses, faculty, and school activities in a simple and efficient way. We aim to enhance the learning experience by providing an easy-to-use system for educators, students, and administrators alike.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Our Mission
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Our mission is to empower schools with the tools needed to improve the educational process. By automating tasks such as attendance tracking, grade management, and scheduling, we help schools focus on what matters most: education and student success.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Key Features
      </h2>
      <ul className="list-disc list-inside text-lg text-gray-600 mb-6">
        <li>Student Enrollment & Management</li>
        <li>Attendance Tracking</li>
        <li>Grade and Exam Management</li>
        <li>Teacher & Faculty Management</li>
        <li>Class Scheduling and Timetable</li>
        <li>Parent-Teacher Communication Portal</li>
        <li>Report Generation & Analytics</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Why Choose Us?
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Our system is built with scalability and user-friendliness in mind, ensuring that schools of all sizes can benefit from its powerful features. With real-time updates, detailed reports, and easy access to student data, our platform helps schools stay organized and make informed decisions.
      </p>
      
      <p className="text-lg text-gray-600">
        Thank you for choosing our School Management System! We are dedicated to supporting your school’s growth and helping you provide the best educational experience possible.
      </p>
    </div>
  );
};

export default AboutPage