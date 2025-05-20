import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/herosection/Hero'; 
import ServicesSection from '../components/servicessection/services'; // Import the ServicesSection component         
import PropertyInvestmentApp from '../components/stepsection/steps'; // Import the PropertyInvestmentApp component
import RoadMap from "../components/RoadMap"
import MarketStats from '../components/MarketStats';
const HomePage = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Hero />
      <ServicesSection />
      {/* <PropertyInvestmentApp /> */}
      <RoadMap />
      <MarketStats />
    </div>
  );
};

export default HomePage;
