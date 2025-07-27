import React, { useState } from 'react';

const ForgotPassword = () => {
  // State to store the email entered by user
  const [email, setEmail] = useState('');

  // State to show success message after submission
  const [submitted, setSubmitted] = useState(false);

  // When the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setSubmitted(true); // Show success message
    setEmail(''); // Clear the input field

    // Hide the success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="min-h-[80vh] bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        {/* Page Heading */}
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>

        {/* Success message after form submission */}
        {submitted && (
          <div className="text-green-600 text-sm text-center mb-4">
             Password reset link sent to your email!
          </div>
        )}

        {/* Form section */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email input */}
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-orange-400"
          />

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-medium transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
