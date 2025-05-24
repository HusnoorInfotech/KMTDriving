// AuthModal.tsx
import React, { useState } from 'react';

interface AuthModalProps {
  onClose: () => void; // Function to close the modal
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (e.g., validation, API call)
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Sign Up / Login</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose} // Close modal
              className="w-1/2 bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Sign Up / Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
