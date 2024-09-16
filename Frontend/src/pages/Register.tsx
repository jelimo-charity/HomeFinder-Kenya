import { useState } from 'react';
import regImage from '../assets/hero1.jpg'; // Import your image

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
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
        backgroundImage: `url(${regImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Right Side - Form */}
      <div className="relative w-full max-w-lg bg-base-100 p-8 rounded-lg shadow-lg z-10 my-10"> {/* Added margin on top and bottom with my-10 */}
        <h2 className="text-3xl font-bold text-center mb-6">Create an Account</h2>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="input input-bordered"
              required
            />
          </div>

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

          {/* Contact Phone */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Contact Phone</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your contact phone"
              className="input input-bordered"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Register</button>
          </div>
        </form>

        <p className="text-center mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-primary">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
