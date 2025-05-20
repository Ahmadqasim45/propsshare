import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/herosection/Hero'; 
import ServicesSection from '../components/servicessection/services';
import PropertyInvestmentApp from '../components/stepsection/steps';
import RoadMap from "../components/RoadMap"
import MarketStats from '../components/MarketStats';
import TeamSection from '../components/teamsection/TeamSection';
import ResourcesSection from '../components/resources-section/ResourcesSection';
import MainFooter from '../components/footer/footer';
import TokenCarousel from '../components/governance/governance';


const HomePage = () => {
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
      <section id="governance">
        <TokenCarousel />
      </section>
      <section id="resources">
        <ResourcesSection />
      </section>
      <MainFooter />
    </div>
  );
};

export default HomePage;
