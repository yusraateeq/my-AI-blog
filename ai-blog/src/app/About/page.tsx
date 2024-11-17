"use client";

import Footer from "../components/Footer"; // Adjusted the path to reflect the location
import Navbar from "../components/Navbar"; // Adjusted the path to reflect the location

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto p-4 flex-grow px-6 sm:px-16 lg:px-32 bg-slate-100 my-10 py-14">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-rose-500 text-center">
          About Us
        </h1>
        <p className="text-base sm:text-lg">
          Welcome to our AI blog! We are passionate about sharing the latest trends, insights, and developments in artificial intelligence. Our mission is to educate and inspire individuals by providing informative and engaging content.
        </p>
        <p className="text-base sm:text-lg mt-4">
          Whether you are an AI enthusiast, a developer, or just curious about the future of technology, we aim to provide you with valuable resources and discussions. Thank you for being a part of our journey!
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
