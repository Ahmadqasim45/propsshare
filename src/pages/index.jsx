import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesSection from "../components/services"; // Import the ServicesSection component
import Roadmap from "../components/RoadMap";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <ServicesSection />
      {/* Add other components here as needed */}
      <Roadmap />
    </div>
  );
};

export default HomePage;
