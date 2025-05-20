import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'; 
import ServicesSection from '../components/services'; // Import the ServicesSection component         

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />    
      <ServicesSection />

    </div>
  );
};

export default HomePage;