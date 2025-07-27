import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [submitted, setSubmitted] = useState(false); // Success message control

  // Form submission handler
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload
    setSubmitted(true); // Show success message

    // Hide message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="min-h-[80vh] bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-6">Login to Your Account</h2>

        {/* Success message */}
        {submitted && (
          <div className="text-green-600 text-sm text-center mb-4">
            * Logged in successfully!
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-orange-400"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-orange-400"
          />

          {/* Links */}
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <Link to="/forgot-password" className="hover:text-orange-500">
              Forgot Password?
            </Link>
            <Link to="/register" className="hover:text-orange-500">
              New User? Register
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 mt-4 rounded hover:bg-orange-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
