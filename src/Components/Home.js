import React from 'react';
import Navigation from './Navigation'; // Import Navigation component
import { Link } from 'react-router-dom';
import htsTruck from '../Images/hts-truck.jpeg';
import './Home.css'; // Adjust the path as per your file structure


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col"> {/* Ensure full height and flexible layout */}
      <Navigation /> {/* Include Navigation component */}
      <div
        className="flex-grow items-center justify-center p-8" // Use flex-grow for content
        style={{
          backgroundImage: `url(${htsTruck})`,
          backgroundSize: '100%', // Slightly larger background size for a "zoom out" effect
          backgroundPosition: '10% 35%', // Adjust the background position with percentage values
          backgroundRepeat: 'no-repeat'

        }}
      >
        <div
          className="bg-gray-300 p-6 rounded-lg shadow-lg max-w-4xl mx-auto"
          style={{ backgroundColor: 'rgba(209, 213, 219, 0.95)', animation: 'fadeInUp 0.75s ease-out' }}
        >
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Hamilton Tree Service</h1>
            <div className="text-left"> {/* Add a div for left-aligned text */}
              <p className="text-lg mt-4">
                Hamilton Tree Service is your trusted partner for all your tree care
                needs in Genesee County, Michigan and surrounding areas. With over a decade of professional experience in the
                industry, we have been serving the community with dedication and
                expertise.
              </p>
              <p className="text-lg mt-4">
                Our team of skilled tree specialists is
                committed to maintaining the health and beauty of your trees. Whether
                you require tree removal, trimming, lot clearing, or emergency services, we
                have the knowledge and equipment to get the job done safely and
                efficiently.
              </p>
              <p className="text-lg mt-4">
                At Hamilton Tree Service, customer satisfaction is our top priority.
                We work closely with our clients to understand their specific needs and
                provide tailored solutions that exceed expectations.
              </p>
              <p className="text-lg mt-4">
                Thank you for choosing Hamilton Tree Service as your trusted tree care
                provider. We look forward to serving you and your trees for many years
                to come.
              </p>
              <div className="text-center mt-4"> {/* Centered text div for the button */}
                <Link
                  to="/contact"
                  className="inline-block bg-fuchsia-500 text-white px-6 py-3 rounded-lg hover:bg-fuchsia-600 transition-colors duration-200"
                >
                  <strong>Contact Us</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
