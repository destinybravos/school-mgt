import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server or display a success message)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>

      {/* Contact Information */}
      <div className="mb-8 text-center">
        <p className="text-lg text-gray-700">For any inquiries, feel free to reach out to us:</p>
        <p className="text-lg text-gray-700 font-semibold">Email: contact@schoolmanagement.com</p>
        <p className="text-lg text-gray-700 font-semibold">Phone: +1 (123) 456-7890</p>
        <p className="text-lg text-gray-700 font-semibold">Address: 123 Education Street, City, Country</p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            rows="5"
            placeholder="Enter your message"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
