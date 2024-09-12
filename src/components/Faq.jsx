import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is a School Management System?',
    answer:
      'A School Management System is a platform that helps schools automate and manage administrative tasks such as student enrollment, attendance tracking, grading, scheduling, and communication between teachers, students, and parents.',
  },
  {
    question: 'How secure is the platform?',
    answer:
      'We take security very seriously. Our system employs encryption protocols, data backups, and access controls to ensure that all data remains secure and only accessible by authorized users.',
  },
  {
    question: 'Can parents access the platform?',
    answer:
      'Yes, our platform includes a parent portal where parents can check their children’s attendance, grades, and communicate with teachers.',
  },
  {
    question: 'Is there customer support available?',
    answer:
      'Yes, we provide 24/7 customer support to assist schools with any issues or questions they may have while using the system.',
  },
  {
    question: 'What are the system requirements?',
    answer:
      'The School Management System is cloud-based, so all you need is a device with an internet connection and a modern web browser like Chrome or Firefox to access it.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md mb-4 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left px-4 py-3 text-lg font-semibold bg-gray-200 hover:bg-gray-300 focus:outline-none flex justify-between items-center"
            >
              {faq.question}
              <span className="ml-4">{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
