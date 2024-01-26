import React from 'react';
import Navigation from './Navigation'; // Import Navigation component
import backgroundImg from '../Images/backgroundImg.jpg' // Import the image

const Home = () => {
  return (
    <div>
    <Navigation /> {/* Include Navigation component */}
    <div
        className="bg-image flex items-center justify-center p-8"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
          <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to A1 Truck & Van Wrecking</h1>
          <div className="text-left"> {/* Add a div for left-aligned text */}
          <p className="text-lg">
            At A1 Truck & Van Wrecking, we are your trusted source for high-quality used auto parts,
            serving the East Valley, Arizona area. With a passion for automobiles and a commitment to sustainability,
            we take pride in offering a wide range of dependable, pre-owned vehicle components.
            </p>
            <p className="text-lg mt-4">
            Our mission is to provide a cost-effective and eco-friendly solution for vehicle owners in need of replacement parts.
            With over 20 years of experience in the automotive industry, our dedicated team meticulously selects, inspects,
            and prepares each used part to meet our rigorous quality standards.
            </p>
            <p className="text-lg mt-4">
            Whether you're a car enthusiast, a DIY mechanic, or simply looking to keep your vehicle running smoothly,
            our extensive inventory has you covered. From engines to transmissions, brakes to lights, our inventory
            spans a diverse selection of makes and models.
            </p>
            <p className="text-lg mt-4">
            At A1 Truck & Van Wrecking, we're more than just a parts provider; we're a reliable partner in keeping your vehicles on the road.
            Discover the value of used auto parts with us and join our community of satisfied customers who have made us their go-to destination
            for dependable automotive solutions.
            </p>
            <p className="text-lg mt-4">
            Choose A1 Truck & Van Wrecking for your next automotive part needs, and experience the quality, affordability, and expertise that sets us apart.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
