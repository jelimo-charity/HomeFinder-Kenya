import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Importing rating icons

const Testimonials = () => {
  // Sample testimonials data
  const testimonials = [
    {
      name: "John Doe",
      location: "Nairobi, Kenya",
      review: "HomeFinder helped me find the perfect place quickly and easily. The process was smooth and stress-free!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1590649880765-91b1956b8276?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlJTIwY3VzdG9tZXIlMjBwcm9maWxlc3xlbnwwfHwwfHx8MA%3D%3D" // Replace with actual user image URL
    },
    {
      name: "Jane Smith",
      location: "Mombasa, Kenya",
      review: "I love how easy it was to browse properties. The customer service was amazing and they found me a great deal.",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwY3VzdG9tZXIlMjBwcm9maWxlc3xlbnwwfHwwfHx8MA%3D%3D" // Replace with actual user image URL
    },
  ];

  // Function to render star ratings
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={i} className="text-yellow-500" />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-base-100 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-lg text-gray-600">Hear from our happy home seekers</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="card max-w-sm bg-white shadow-lg rounded-lg p-6 text-center"
          >
            {/* User Image */}
            <div className="flex justify-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full border-4 border-primary"
              />
            </div>

            {/* Name & Location */}
            <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
            <p className="text-gray-500 mb-4">{testimonial.location}</p>

            {/* Review Text */}
            <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>

            {/* Rating Stars */}
            <div className="mb-2">{renderStars(testimonial.rating)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
