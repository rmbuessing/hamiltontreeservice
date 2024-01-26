import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation'; // Import Navigation component

const Inventory = () => {
  return (
    <div>
      <Navigation /> {/* Include Navigation component */}
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Coming Soon!</h1>
          <p className="text-lg mb-4">
            We are working hard to bring you a wide range of high-quality used auto parts.
            In the meantime, feel free to contact us, and we'd be happy to discuss your needs.
          </p>
          <Link
          to="/contact"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Contact Us
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
