import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/herosection/Hero'; 
import ServicesSection from '../components/servicessection/services'; // Import the ServicesSection component         
import PropertyInvestmentApp from '../components/stepsection/steps'; // Import the PropertyInvestmentApp component
import RoadMap from "../components/RoadMap"
import MarketStats from '../components/MarketStats';
import TeamSection from '../components/teamsection/TeamSection';

const HomePage = () => {  // Add scroll behavior to the HTML element for smooth scrolling
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="howItWorks">
        <RoadMap />
      </section>
      <section id="market">
        <MarketStats />
      </section>
      <section id="team">
        <TeamSection />
      </section>
      <section id="resources">
        {/* Resources section will be added here */}
      </section>
    </div>
  );
};

export default HomePage;
