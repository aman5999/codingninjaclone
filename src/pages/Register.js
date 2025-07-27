import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate(); // For redirecting after successful registration

  //  State to show success message
  const [submitted, setSubmitted] = useState(false);

  //  Form input state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  //  When user types in an input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  //  On form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Show message

    // Clear input fields
    setFormData({ name: '', email: '', password: '' });

    // Hide message & redirect to login after 1.5s
    setTimeout(() => {
      setSubmitted(false);
      navigate('/login');
    }, 1500);
  };

  return (
    <section className="min-h-[80vh] bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

        {/* Success Message */}
        {submitted && (
          <div className="text-green-600 text-sm text-center mb-4">
            * Registered successfully! Redirecting to login...
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-orange-400"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-orange-400"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-orange-400"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
