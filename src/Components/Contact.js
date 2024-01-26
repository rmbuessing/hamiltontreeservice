import React from 'react';
import Navigation from './Navigation';

const Contact = () => {
  return (
    <div>
      <Navigation />
      <div className="flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-2/3 md:flex my-10"> {/* Adjust the width as needed */}
          <div className="md:w-1/2 md:pr-4"> {/* Adjust the width and padding */}
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1> {/* Increased font size */}
            <p className="text-gray-700 text-lg mb-2 font-bold"> {/* Bold labels */}
              Address:
            </p>
            <p className="text-gray-700 text-lg mb-4"> {/* Regular address */}
              1708 S Tomahawk Rd, Apache Junction, AZ 85119
            </p>
            <p className="text-gray-700 text-lg mb-2 font-bold"> {/* Bold labels */}
              Phone:
            </p>
            <p className="text-gray-700 text-lg mb-4"> {/* Regular phone number */}
              (480) 983-0511
            </p>
            <div>
              <p className="text-gray-700 text-lg mb-2 font-bold"> {/* Bold labels */}
                Hours of Operation:
              </p>
              <div className="flex"> {/* Center days */}
                <div className="w-40">
                  <p className="text-gray-700 text-lg mb-2"> {/* Increased font size */}
                    - Monday
                </p>
              <p className="text-gray-700 text-lg mb-2"> {/* Increased font size */}
                - Tuesday
              </p>
              <p className="text-gray-700 text-lg mb-2"> {/* Increased font size */}
                - Wednesday
              </p>
              <p className="text-gray-700 text-lg mb-2"> {/* Increased font size */}
                - Thursday
              </p>
              <p className="text-gray-700 text-lg mb-2"> {/* Increased font size */}
                - Friday
              </p>
              <p className="text-gray-700 text-lg mb-2"> {/* Increased font size */}
                - Saturday
              </p>
              <p className="text-gray-700 text-lg mb-2"> {/* Increased font size */}
                - Sunday
              </p>
            </div>
            <div>
              <p className="text-gray-700 text-lg mb-2"> {/* Increased font size */}
                8:00 AM - 5:00 PM
              </p>
              <p className="text-gray-700 text-lg mb-2"> {/* Increased font size */}
                8:00 AM - 5:00 PM
              </p>
              <p className="text-gray-700 text-lg mb-2"> {/* Increased font size */}
                8:00 AM - 5:00 PM
              </p>
              <p className="text-gray-700 text-lg mb-2"> {/* Increased font size */}
                8:00 AM - 5:00 PM
              </p>
              <p className="text-gray-700 text-lg mb-2"> {/* Increased font size */}
                8:00 AM - 5:00 PM
              </p>
              <p className="text-gray-700 text-lg mb-2"> {/* Increased font size */}
                8:00 AM - 1:00 PM
              </p>
              <p className="text-gray-700 text-lg mb-2"> {/* Increased font size */}
                Closed
              </p>
            </div>
          </div>
          </div>
          </div>

          {/* Embed Google Map */}
          <div className="md:w-1/2">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.2699604854427!2d-111.54718068480692!3d33.40892698078454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872bb457566b636d%3A0x2d9f9dd5898c1c88!2s1708%20S%20Tomahawk%20Rd%2C%20Apache%20Junction%2C%20AZ%2085119%2C%20USA!5e0!3m2!1sen!2s!4v1659471236982!5m2!1sen!2s"
              width="100%"
              height="500"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;