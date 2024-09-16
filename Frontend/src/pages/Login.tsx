import { useState } from 'react';
import loginImage from '../assets/hero2.jpg'; // Import your background image

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-base-200 relative p-8" // Added padding (p-8)
      style={{
        backgroundImage: `url(${loginImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Login Form */}
      <div className="relative w-full max-w-md bg-base-100 p-8 rounded-lg shadow-lg z-10 my-10">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>

          {/* Password */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-between mb-4">
            <a href="/forgot-password" className="text-primary text-sm">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Login</button>
          </div>
        </form>

        <p className="text-center mt-4">
          Don't have an account?{' '}
          <a href="/register" className="text-primary">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
