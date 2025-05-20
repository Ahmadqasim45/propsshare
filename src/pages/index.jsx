import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'; 
import ServicesSection from '../components/services'; // Import the ServicesSection component         
import PropertyInvestmentApp from '../components/steps'; // Import the PropertyInvestmentApp component

const HomePage = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Hero />    
      <ServicesSection />
      <PropertyInvestmentApp />
    </div>
  );
};

export default HomePage;