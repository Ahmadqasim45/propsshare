import React, { useState, useEffect } from "react";

// Using placeholder images - replace with your actual image imports
const placeholderIcon1 = "/api/placeholder/240/240";
const placeholderIcon2 = "/api/placeholder/240/240";
const placeholderIcon3 = "/api/placeholder/240/240";

const slides = [
  {
    id: 1,
    title: "GOVERNANCE",
    content:
      "The native $PRP utility token empowers holders with full governance rights across the Propbase ecosystem. By staking $PRP, you can submit and vote on proposals—from protocol upgrades and fee models to new feature roadmaps—affecting the platform's future direction and value distribution. This decentralized structure aligns incentives and gives every token holder a direct voice in strategic decisions. Active participants are rewarded for their ongoing contributions, creating a vibrant, stakeholder-driven ecosystem.",
    image: placeholderIcon1,
    buttonText: "JOIN OUR COMMUNITY",
    backgroundColor: "bg-gradient-to-tr from-[#06121e] to-[#2a1129]",
  },
  {
    id: 2,
    title: "MEMBERSHIP & BENEFITS",
    content:
      "By staking our native $PRP token, you unlock tiered membership levels that grant early whitelist access to new properties, exclusive investment opportunities, and preferential investment opportunities. The more $PRP you stake, the higher your membership tier—and the richer your perks, from priority access to prime assets to special invites for limited-edition offerings.",
    image: placeholderIcon2,
    backgroundColor: "bg-gradient-to-tr from-[#06121e] to-[#2a1129]",
  },
  {
    id: 3,
    title: "REWARDS & INCENTIVES",
    content:
      "The allocation of $PRP tokens to our rewards protocol is designed to both recognize the loyalty of existing users and attract new participants to the Propbase ecosystem. Through incentives—such as staking bonuses, referral rewards, and usage-based grants—we create a dynamic environment that encourages active engagement, drives long-term retention, and accelerates overall platform growth.",
    image: placeholderIcon3,
    backgroundColor: "bg-gradient-to-tr from-[#06121e] to-[#2a1129]",
  },
];

export default function TokenCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayDelay = 5000;

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
  };

  return (
    <div 
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      <div 
        className="flex transition-transform duration-700 ease-in-out h-[380px]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`w-full flex-shrink-0 ${slide.backgroundColor}`}
          >
            <div className="max-w-[1400px] mx-auto h-full flex items-center px-8 md:px-16">
              <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
                {/* Text content */}
                <div className="md:w-1/2 text-white max-w-[600px]">
                  <h2 className="text-sm uppercase tracking-wider font-medium mb-6">{slide.title}</h2>
                  <p className="text-sm leading-relaxed text-white/80 mb-8">
                    {slide.content}
                  </p>
                  {slide.buttonText && (
                    <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white text-xs px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:shadow-lg transition-all duration-300">
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
                <div className="md:w-1/2 flex justify-center md:justify-end">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-[200px] h-[200px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
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