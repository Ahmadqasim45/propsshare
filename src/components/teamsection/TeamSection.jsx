import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Use the actual image imports
import img1 from "../../assets/images/matt.png";
import img2 from "../../assets/images/adnan.png";
import img3 from "../../assets/images/antonios.png";
import groupBg from "../../assets/images/group-bg.png"; // Vertical lines background image

// Team member data with original images
const teamMembers = [
  {
    id: 1,
    name: "ADNAN KHAN",
    role: "CEO",
    image: img1,
    linkedin: "https://www.linkedin.com/company/propshare",
    description:
      "Adnan is a qualified accountant and seasoned residential property expert who has served as Director of Central Services at Stirling Ackroyd and as Sales Director at Leaders Romans Group—Britain's third-largest estate agency network. In addition to his extensive hands-on experience in real estate finance and operations, he is also a cryptocurrency owner and passionate enthusiast.",
    color: "text-pink-500",
  },
  {
    id: 2,
    name: "MATT HEWITT",
    role: "COO",
    image: img2,
    linkedin: "https://www.linkedin.com/company/propshare",
    description:
      "Matt is a qualified accountant with senior management experience at Safeway plc and Dell Computer Technologies. He went on to serve as Chief Marketing Officer at Countrywide plc—then the UK's largest estate agency network—and was a founding member and Chief Operating Officer of Stirling Ackroyd Group Ltd, which was sold to Leaders Romans Group (the UK's third-largest estate agency network) in 2024.",
    color: "text-fuchsia-400",
  },
  {
    id: 3,
    name: "ANTONIOS KOZAKIS",
    role: "SALES DIRECTOR",
    image: img3,
    linkedin: "https://www.linkedin.com/company/propshare",
    description:
      "He is a seasoned residential property expert with extensive experience managing call centres, streamlining customer service operations and leading high-performing teams. As Area Sales Director at Leaders Group (LRG)—the UK's third-largest estate agency network—he drove regional sales growth, mentored multiple teams and consistently exceeded targets in both lettings and sales.",
    color: "text-pink-400",
  },
  {
    id: 4,
    name: "TOM DAVIES",
    role: "MARKETING DIRECTOR",
    image: img1,
    linkedin: "https://www.linkedin.com/company/propshare",
    description:
      "Tom is a marketing professional with extensive experience in residential property. He has served as Marketing Director at one of the UK's largest estate agency networks, overseeing digital campaigns and operations across multiple regions.",
    color: "text-pink-500",
  },
];

// Create a separate TeamCard component to avoid hooks inside map
const TeamCard = ({ member }) => {
  return (
    <div className="group relative rounded-[20px] overflow-hidden shadow-lg">
      {/* Fixed-height card container */}
      <div className="relative h-[380px] w-full">
        {/* Image */}
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: "center top" }}
        />
        
        {/* Info container that slides up from bottom on hover */}
        <div 
          className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
        >
          {/* Dark overlay background with rounded corners */}
          <div className="absolute inset-0 bg-black/80 rounded-[20px]"></div>
          
          {/* Content with padding */}
          <div className="relative p-6">
            {/* Name and role row */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-white">
                {member.name}
              </h3>
              <div className="flex items-center gap-2">
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.25 11.28h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v5.5h-3v-10h3v1.39c.83-1.02 2.08-1.39 3.31-1.39 2.48 0 4.5 2.02 4.5 4.5v5.5z" />
                  </svg>
                </a>
                <span className={`text-xs font-semibold ${member.color}`}>
                  {member.role}
                </span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-xs text-white/80 leading-relaxed">
              {member.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [touchPosition, setTouchPosition] = useState(null);
  const autoplayTimeoutRef = useRef(null);
  const autoplayDelay = 5000;
  
  // Calculate visible cards based on screen size
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 1;
    
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    if (window.innerWidth < 1280) return 3;
    return 3;
  };
  
  const [visibleCount, setVisibleCount] = useState(1);
  const [isTablet, setIsTablet] = useState(false);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
      const width = window.innerWidth;
      setIsTablet(width >= 768 && width < 996);
    };
    
    // Set initial visible count
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(autoplayTimeoutRef.current);
    };
  }, []);
  
  // Autoplay functionality
  useEffect(() => {
    if (autoplay) {
      clearTimeout(autoplayTimeoutRef.current);
      autoplayTimeoutRef.current = setTimeout(() => {
        handleNext();
      }, autoplayDelay);
    }
    
    return () => {
      clearTimeout(autoplayTimeoutRef.current);
    };
  }, [currentIndex, autoplay]);
  
  const maxIndex = Math.max(0, teamMembers.length - visibleCount);
  
  const handlePrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
    resetAutoplay();
  };
  
  const handleNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
    resetAutoplay();
  };
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetAutoplay();
  };
  
  const resetAutoplay = () => {
    if (autoplay) {
      clearTimeout(autoplayTimeoutRef.current);
      autoplayTimeoutRef.current = setTimeout(() => {
        handleNext();
      }, autoplayDelay);
    }
  };
  
  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchPosition(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }
    
    const diff = touchPosition - e.touches[0].clientX;
    
    // Minimum swipe distance threshold
    if (Math.abs(diff) > 30) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      setTouchPosition(null);
    }
  };
  
  // Get visible team members
  const visibleTeamMembers = [];
  for (let i = 0; i < visibleCount; i++) {
    const index = (currentIndex + i) % teamMembers.length;
    visibleTeamMembers.push(teamMembers[index]);
  }
  
  // Calculate dots for pagination
  const totalDots = Math.min(teamMembers.length, maxIndex + 1);    return (
    <section className="relative w-full bg-primary py-16 px-4 text-white overflow-hidden">
      {/* Vertical lines background */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute w-full h-full">
          <img src={groupBg} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-12 text-center md:text-left">
          <p className="text-xs text-white/70 uppercase font-medium tracking-wide">THE TEAM</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">PEOPLE BEHIND THE SCENES</h2>
        </div>
        
        {/* Mobile-optimized Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {/* Card Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleTeamMembers.map((member) => (
                <TeamCard
                  key={member.id}
                  member={member}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-between">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className={`${isTablet || window.innerWidth >= 996 ? 'flex' : 'hidden md:flex'} items-center justify-center w-10 h-10 rounded-full
               bg-white/10 hover:bg-white/20 text-white transition-colors duration-300`}
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Pagination Dots */}
            <div className="flex-1 flex justify-center gap-2">
              {Array.from({ length: totalDots }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-pink-500 w-5' : 'bg-white/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className={`${isTablet || window.innerWidth >= 996 ? 'flex' : 'hidden md:flex'} items-center justify-center w-10 h-10 rounded-full
               bg-white/10 hover:bg-white/20 text-white transition-colors duration-300`}
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Add touch swipe areas for tablets specifically */}
          {isTablet && (
            <div className="absolute inset-x-0 top-0 bottom-0 flex justify-between items-center z-10 pointer-events-none">
              <div 
                className="w-1/4 h-full pointer-events-auto"
                onClick={handlePrev}
                aria-label="Previous slide"
              ></div>
              <div 
                className="w-1/4 h-full pointer-events-auto"
                onClick={handleNext}
                aria-label="Next slide"
              ></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}