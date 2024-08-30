import { FaHome, FaCheckCircle, FaUsers } from 'react-icons/fa';
import bgImage from '../assets/hero1.jpg'; // Replace with your actual image path

const WhyChoose = () => {
  const points = [
    {
      icon: <FaHome className="text-primary text-4xl mb-4" />,
      title: "Wide Selection",
      description: "Thousands of properties across Kenya.",
    },
    {
      icon: <FaCheckCircle className="text-primary text-4xl mb-4" />,
      title: "Verified Listings",
      description: "Every listing is verified for accuracy.",
    },
    {
      icon: <FaUsers className="text-primary text-4xl mb-4" />,
      title: "User-Friendly",
      description: "Intuitive design for a seamless experience.",
    },
  ];

  return (
    <div 
      className="py-16 bg-cover bg-center" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center mb-12 text-neutral-content">
        <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-lg text-gray-200">
          Discover what sets us apart in the world of real estate.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {points.map((point, index) => (
          <div
            key={index}
            className="card max-w-sm bg-white bg-opacity-90 shadow-lg rounded-lg p-6 text-center"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              {point.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">{point.title}</h3>

            {/* Description */}
            <p className="text-gray-700">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
