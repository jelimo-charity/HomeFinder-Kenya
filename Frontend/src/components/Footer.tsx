import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h2 className="footer-title">Quick Links</h2>
            <ul className="mt-4">
              <li><a href="#" className="link link-hover">Home</a></li>
              <li><a href="#" className="link link-hover">Search</a></li>
              <li><a href="#" className="link link-hover">About Us</a></li>
              <li><a href="#" className="link link-hover">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h2 className="footer-title">Legal</h2>
            <ul className="mt-4">
              <li><a href="#" className="link link-hover">Terms of Service</a></li>
              <li><a href="#" className="link link-hover">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="footer-title">Contact Us</h2>
            <p className="mt-4">123 HomeFinder Ave, Nairobi, Kenya</p>
            <p>Email: info@homefinder.co.ke</p>
            <p>Phone: +254 700 000 000</p>
          </div>

          {/* Social Media Links & Newsletter Signup */}
          <div>
            <h2 className="footer-title">Stay Connected</h2>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaInstagram size={24} />
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h2 className="footer-title">Newsletter Signup</h2>
              <div className="form-control">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="input input-bordered w-full pr-16"
                  />
                  <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-10">
          <p>&copy; {new Date().getFullYear()} HomeFinder Kenya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
