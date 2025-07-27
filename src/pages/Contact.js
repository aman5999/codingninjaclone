import React, { useState } from 'react';

const Contact = () => {
  // State variables for form fields and submission message
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload

    setSubmitted(true); // Show success message

    // Clear the input fields
    setName('');
    setEmail('');
    setMessage('');

    // Auto-hide success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="min-h-[80vh] bg-gray-100 py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>

        {/* Success message after submission */}
        {submitted && (
          <div className="mb-6 text-green-600 text-center font-medium">
            ✅ Message submitted successfully!
          </div>
        )}

        {/* Contact Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-medium transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
