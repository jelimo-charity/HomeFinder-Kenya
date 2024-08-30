import { FaBed, FaBath, FaMapMarkerAlt } from 'react-icons/fa';

const FeaturedListings = () => {
  // Sample property data
  const properties = [
    {
      id: 1,
      title: "3-Bedroom Apartment in Langata",
      price: "KSh 45,000 / month",
      location: "Langata, Nairobi",
      bedrooms: 3,
      bathrooms: 2,
      image: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
    },
    {
      id: 2,
      title: "2-Bedroom House in Karen",
      price: "KSh 60,000 / month",
      location: "Karen, Nairobi",
      bedrooms: 2,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1719299224357-19232e85e6ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb3BlcnRpZXN8ZW58MHx8MHx8fDA%3D", // Replace with actual image URL
    },
    {
      id: 3,
      title: "Luxury Villa in Mombasa",
      price: "KSh 150,000 / month",
      location: "Nyali, Mombasa",
      bedrooms: 5,
      bathrooms: 4,
      image: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
    },
    {
      id: 4,
      title: "Modern Studio Apartment in Kilimani",
      price: "KSh 25,000 / month",
      location: "Kilimani, Nairobi",
      bedrooms: 1,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1719299224357-19232e85e6ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb3BlcnRpZXN8ZW58MHx8MHx8fDA%3D", // Replace with actual image URL
    },
  ];

  return (
    <div className="bg-base-100 py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Featured Properties</h2>
          <p className="text-lg text-gray-600">Explore some of the best listings in prime locations</p>
        </div>

        {/* Property Cards */}
        <div className="flex overflow-x-scroll space-x-4">
          {properties.map((property) => (
            <div
              key={property.id}
              className="card w-80 bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-primary text-lg font-bold mb-2">{property.price}</p>
                <div className="flex items-center text-gray-600 mb-2">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{property.location}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600 mb-4">
                  <div className="flex items-center">
                    <FaBed className="mr-1" />
                    <span>{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <FaBath className="mr-1" />
                    <span>{property.bathrooms} Baths</span>
                  </div>
                </div>
                <button className="btn btn-primary w-full">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedListings;
