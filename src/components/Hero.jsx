import React from "react";
import heroimage from "../assets/images/hero background vertical shape 1.jpg"; // Placeholder for the top-right image/shape
const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gray-900">        {/* Top-right image/shape */}
        <div className="absolute top-0 right-0 w-full h-full">
          {/* Hero image with 50% width */}
          <img 
            src={heroimage}
            alt="Decorative shape" 
            className="absolute top-0 right-0 w-1/2 h-auto max-h-full object-cover object-left"
          />
        </div>
      </div>
  {/* <Navbar /> */}
      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center top-20">
        {/* Main heading */}
        <h6 className="text-4xl md:text-5xl lg:text-6xl  font-bold text-white w-1400 mx-auto leading-tight">
          We make Real World Assets
          <br />
          easy and accessible to everyone
        </h6>

        {/* Subheading */}
        <p className="mt-6 text-sm md:text-base text-gray-200 max-w-2xl mx-auto">
          Empower your portfolio with high class UK properties.
          <br />
          Signup with your Gmail and account and dive deep into the world of Blockchain.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 bg-pink-600 text-white font-medium rounded-full hover:bg-pink-700 transition-colors"
          >
            Join the waitlist
          </a>
        </div>

        {/* Social icons */}
        <div className="mt-12 flex items-center justify-center space-x-4">
          {/* Telegram icon */}
          <a href="#" className="text-white hover:text-gray-300">
            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>
          
          {/* X/Twitter icon */}
          <a href="#" className="text-white hover:text-gray-300">
            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>
        </div>

        {/* WHAT WE DO label at bottom */}
        <div className="absolute bottom-8 left-8 text-white/70 text-sm font-medium">
          WHAT WE DO
        </div>
      </div>
    </div>
  );
};

export default HeroSection;