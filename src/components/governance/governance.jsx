import React, { useState, useEffect, useRef } from "react";

// Using placeholder images - replace with your actual image imports
import placeholderIcon1 from "../../assets/images/image 30 (2).png";
import placeholderIcon2 from "../../assets/images/image 31.png";
import placeholderIcon3 from "../../assets/images/image 32.png";
import groupBg from "../../assets/images/group-bg.png"; // Vertical lines background image

const slides = [
  {
    id: 1,
    title: "GOVERNANCE",
    content:
      "The native $PRP utility token empowers holders with full governance rights across the Propbase ecosystem. By staking $PRP, you can submit and vote on proposals—from protocol upgrades and fee models to new feature roadmaps—affecting the platform's future direction and value distribution. This decentralized structure aligns incentives and gives every token holder a direct voice in strategic decisions. Active participants are rewarded for their ongoing contributions, creating a vibrant, stakeholder-driven ecosystem.",
    image: placeholderIcon1,
    buttonText: "JOIN OUR COMMUNITY",
  },
  {
    id: 2,
    title: "MEMBERSHIP & BENEFITS",
    content:
      "By staking our native $PRP token, you unlock tiered membership levels that grant early whitelist access to new properties, exclusive investment opportunities, and preferential investment opportunities. The more $PRP you stake, the higher your membership tier—and the richer your perks, from priority access to prime assets to special invites for limited-edition offerings.",
    image: placeholderIcon2,
  },
  {
    id: 3,
    title: "REWARDS & INCENTIVES",
    content:
      "The allocation of $PRP tokens to our rewards protocol is designed to both recognize the loyalty of existing users and attract new participants to the Propbase ecosystem. Through incentives—such as staking bonuses, referral rewards, and usage-based grants—we create a dynamic environment that encourages active engagement, drives long-term retention, and accelerates overall platform growth.",
    image: placeholderIcon3,
  },
];

export default function TokenCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const autoplayDelay = 5000;
  const carouselRef = useRef(null);

  // Check if device is mobile/tablet
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    let interval;
    if (isAutoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, autoplayDelay);
    }
    return () => clearInterval(interval);
  }, [isAutoplay]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 5000);
  };

  // Touch handlers for mobile swiping
  const handleTouchStart = (e) => {
    setIsAutoplay(false);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) { // Swipe left
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }

    if (touchStart - touchEnd < -50) { // Swipe right
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    }
    
    // Resume autoplay after a delay
    setTimeout(() => setIsAutoplay(true), 3000);
  };

  // Navigation functions
  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 5000);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 5000);
  };  return (
    <div 
      className="relative w-full overflow-hidden bg-primary"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Vertical lines background */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute w-full h-full">
          <img src={groupBg} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div 
        className="flex transition-transform duration-700 ease-in-out min-h-[480px] md:h-[380px]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className="w-full flex-shrink-0 py-8 md:py-0"
          >
            <div className="max-w-[1400px] mx-auto h-full flex items-center px-6 sm:px-8 md:px-16">
              <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-8">
                {/* Text content */}
                <div className="md:w-1/2 text-white max-w-[600px] text-center md:text-left">
                  <h2 className="text-sm uppercase tracking-wider font-medium mb-4 md:mb-6">{slide.title}</h2>
                  <p className="text-sm leading-relaxed text-white/80 mb-6 md:mb-8">
                    {slide.content}
                  </p>
                  {slide.buttonText && (
                    <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white text-xs px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:shadow-lg transition-all duration-300 mx-auto md:mx-0">
                      {slide.buttonText}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 16 16 12 12 8"></polyline>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                    </button>
                  )}
                </div>
                
                {/* Image */}
                <div className="md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Only on desktop/tablet */}
      {!isMobile && (
        <>
          <button 
            onClick={prev}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all duration-300 z-10"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button 
            onClick={next}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all duration-300 z-10"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </>
      )}

      {/* Hidden touch areas for mobile swiping */}
      {isMobile && (
        <div className="absolute inset-x-0 top-0 bottom-0 flex justify-between items-center pointer-events-none">
          <button
            onClick={prev}
            className="h-full w-1/4 flex items-center justify-start pointer-events-auto bg-transparent"
            aria-label="Previous slide"
          >
            <span className="sr-only">Previous</span>
          </button>
          <button
            onClick={next}
            className="h-full w-1/4 flex items-center justify-end pointer-events-auto bg-transparent"
            aria-label="Next slide"
          >
            <span className="sr-only">Next</span>
          </button>
        </div>
      )}

      {/* Pagination dots */}
      <div className="absolute bottom-3 sm:bottom-6 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-pink-500" 
                : "bg-white/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}