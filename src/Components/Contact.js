import React from 'react';
import Navigation from './Navigation';
import './Home.css'; // Adjust the path as per your file structure

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen justify-between">
      <Navigation />
      <div className="flex items-center justify-center">
        <div className="bg-white px-8 py-4 rounded-lg shadow-lg w-2/3 md:flex mt-16 mb-4"
          style={{ animation: 'fadeInUp 0.5s ease-out' }}>

          <div className="md:w-1/2 md:pr-4">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>

            <p className="text-red-600 text-lg mb-2 font-bold">24-Hour Emergency Service:</p>
            <p className="text-gray-700 text-lg mb-4">(810) 291-0410</p>

            <p className="text-gray-700 text-lg mb-2 font-bold">Areas of Service:</p>
            <p className="text-gray-700 text-lg mb-4">Genesee County and surrounding areas</p>
            <p className="text-gray-700 text-lg mb-2 font-bold">Phone:</p>
            <p className="text-gray-700 text-lg mb-4">(810) 291-0410</p>
            <p className="text-gray-700 text-lg mb-2 font-bold">Email:</p>
            <p className="text-gray-700 text-lg mb-4 break-words">Hamiltontreeservicemi@gmail.com</p>
          </div>

          <div className="md:w-1/2">
            <p className="text-gray-700 text-lg mb-2 font-bold mt-8">Hours of Operation:</p>
            <div className="flex">
              {/* Full day names for larger screens */}
              <div className="w-40 hidden sm:block">
                <p className="text-gray-700 text-lg mb-2">- Monday</p>
                <p className="text-gray-700 text-lg mb-2">- Tuesday</p>
                <p className="text-gray-700 text-lg mb-2">- Wednesday</p>
                <p className="text-gray-700 text-lg mb-2">- Thursday</p>
                <p className="text-gray-700 text-lg mb-2">- Friday</p>
                <p className="text-gray-700 text-lg mb-2">- Saturday</p>
                <p className="text-gray-700 text-lg mb-2">- Sunday</p>
              </div>
              {/* Abbreviated day names for smaller screens */}
              <div className="w-40 sm:hidden">
                <p className="text-gray-700 text-lg mb-2">- Mon</p>
                <p className="text-gray-700 text-lg mb-2">- Tue</p>
                <p className="text-gray-700 text-lg mb-2">- Wed</p>
                <p className="text-gray-700 text-lg mb-2">- Thu</p>
                <p className="text-gray-700 text-lg mb-2">- Fri</p>
                <p className="text-gray-700 text-lg mb-2">- Sat</p>
                <p className="text-gray-700 text-lg mb-2">- Sun</p>
              </div>
              <div>
                <p className="text-gray-700 text-lg mb-2">8 AM - 8 PM</p>
                <p className="text-gray-700 text-lg mb-2">8 AM - 8 PM</p>
                <p className="text-gray-700 text-lg mb-2">8 AM - 8 PM</p>
                <p className="text-gray-700 text-lg mb-2">8 AM - 8 PM</p>
                <p className="text-gray-700 text-lg mb-2">8 AM - 8 PM</p>
                <p className="text-gray-700 text-lg mb-2">8 AM - 8 PM</p>
                <p className="text-gray-700 text-lg mb-2">8 AM - 8 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
