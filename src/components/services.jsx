import React from "react";
// Import Math.PI if needed
import { PI } from "Math";
import toprightellipse from "../assets/images/services section background  top.png"; // Placeholder for the top-right image/shape
import ellipseleft from "../assets/images/services section background  left.png"; // Placeholder for the left image/shape
import pinkmodernproperty from "../assets/images/first card image.png"; // Placeholder for the pink modern property image
const ServicesSection = () => {
  return (    <div className="relative w-full bg-[#070419] text-white py-0 md:py-20 overflow-hidden">
      {/* Background ellipse image at the top right */}
      <div className="absolute top-0 right-0 w-1/2 overflow-hidden">
        <img 
          src={toprightellipse}
          alt="Background shape" 
          className="h-[500px] w-full object-cover object-right opacity-80"
        />
      </div>
      
      {/* Background ellipse image at the left side */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-28">
        <img 
          src={ellipseleft}
          alt="Background shape" 
          className="h-[500px] w-full object-cover object-right opacity-80"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 xl:px-12 relative z-10 max-w-7xl">
        {/* Section header */}
        <div className="mb-16 pt-8 lg:pt-12">
          <p className="text-sm uppercase text-[#FF0077] mb-2 tracking-wider font-medium">WHAT WE DO</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">THE DIFFERENCE</h2>
          <div className="w-20 h-1 bg-[#FF0077] mt-4"></div>
        </div>
        {/* Services grid - restructured for proper layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-8">
          {/* Property image - takes up full height and first position */}
          <div className="lg:col-span-1 h-[500px] rounded-2xl overflow-hidden shadow-xl shadow-[#FF0077]/10 transform transition-transform hover:scale-[1.02] duration-300">            <img 
              src={pinkmodernproperty} 
              alt="Pink modern property" 
              className="w-full h-full object-cover object-center rounded-2xl"
            />
          </div>
          
          {/* 2x2 Grid for the 4 service cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">              {/* No wallet needed */}
              <div className="bg-gradient-to-br from-[#121033]/90 to-[#0d0b24]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#2b2853]/50 shadow-lg shadow-[#FF0077]/5 transform transition-transform hover:translate-y-[-5px] duration-300 relative overflow-hidden group h-[250px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF0077]/0 via-[#FF0077]/0 to-[#FF0077]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="uppercase text-sm font-bold mb-4 text-white">NO WALLET NEEDED</h3>
                <p className="text-white/80 text-sm font-light leading-relaxed">
                  Never had a crypto wallet? No problem! We offer a secure login and our system remembers you.
                </p>
                <div className="mt-6">
                  <div className="w-12 h-12 rounded-full bg-[#FF0077]/20 flex items-center justify-center border border-[#FF0077]/30">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#FF0077]" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>              {/* Fully regulated */}
              <div className="bg-gradient-to-br from-[#121033]/90 to-[#0d0b24]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#2b2853]/50 shadow-lg shadow-[#FF0077]/5 transform transition-transform hover:translate-y-[-5px] duration-300 relative overflow-hidden group h-[250px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF0077]/0 via-[#FF0077]/0 to-[#FF0077]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="uppercase text-sm font-bold mb-4 text-white">FULLY REGULATED</h3>
                <p className="text-white/80 text-sm font-light leading-relaxed">
                  PropsShare is fully regulated, holding all needed permissions and adhering to all required MLR/KYC and anti-fraud rules.
                </p>
                <div className="mt-6">
                  <div className="w-12 h-12 rounded-full bg-[#FF0077]/20 flex items-center justify-center border border-[#FF0077]/30">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#FF0077]" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M7 12L10 15L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>              {/* Blockchain secured */}
              <div className="bg-gradient-to-br from-[#121033]/90 to-[#0d0b24]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#2b2853]/50 shadow-lg shadow-[#FF0077]/5 transform transition-transform hover:translate-y-[-5px] duration-300 relative overflow-hidden group h-[250px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF0077]/0 via-[#FF0077]/0 to-[#FF0077]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="uppercase text-sm font-bold mb-4 text-white">BLOCKCHAIN SECURED</h3>
                <p className="text-white/80 text-sm font-light leading-relaxed">
                  PropsShare is secured by blockchain technology. Property records are digital, authenticated and can be audited.
                </p>
                <div className="mt-6">
                  <div className="w-12 h-12 rounded-full bg-[#FF0077]/20 flex items-center justify-center border border-[#FF0077]/30">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#FF0077]" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
              </div>              {/* We pay your fees */}
              <div className="bg-gradient-to-br from-[#121033]/90 to-[#0d0b24]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#2b2853]/50 shadow-lg shadow-[#FF0077]/5 transform transition-transform hover:translate-y-[-5px] duration-300 relative overflow-hidden group h-[250px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF0077]/0 via-[#FF0077]/0 to-[#FF0077]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="uppercase text-sm font-bold mb-4 text-white">WE PAY YOUR FEES</h3>
                <p className="text-white/80 text-sm font-light leading-relaxed">
                  PropsShare covers all your Ethereum gas, network, blockchain and contract fees for transaction costs.
                </p>
                <div className="mt-6">
                  <div className="w-12 h-12 rounded-full bg-[#FF0077]/20 flex items-center justify-center border border-[#FF0077]/30">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#FF0077]" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M17 4L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M7 4L9 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M16 12H20M4 12H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer text */}
        <div className="mt-28 mb-8">
          <p className="text-sm uppercase text-[#FF0077] mb-2 tracking-wider font-medium">THE FLOW</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">HOW IT WORKS</h2>
          <div className="w-20 h-1 bg-[#FF0077] mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;