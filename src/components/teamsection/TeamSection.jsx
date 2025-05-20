import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Note: In a real implementation, you would use actual image imports
// Since we can't access your actual assets, I'm using placeholder images
const placeholderImage = "/api/placeholder/400/500";

const teamMembers = [
  {
    name: "ADNAN KHAN",
    role: "CEO",
    image: placeholderImage,
    linkedin: "#",
    description:
      "Adnan is a qualified accountant and seasoned residential property expert who has served as Director of Central Services at Stirling Ackroyd and as Sales Director at Leaders Romans Group—Britain's third-largest estate agency network. In addition to his extensive hands-on experience in real estate finance and operations, he is also a cryptocurrency owner and passionate enthusiast.",
    color: "text-pink-500",
  },
  {
    name: "MATT HEWITT",
    role: "COO",
    image: placeholderImage,
    linkedin: "#",
    description:
      "Matt is a qualified accountant with senior management experience at Safeway plc and Dell Computer Technologies. He went on to serve as Chief Marketing Officer at Countrywide plc—then the UK's largest estate agency network—and was a founding member and Chief Operating Officer of Stirling Ackroyd Group Ltd, which was sold to Leaders Romans Group (the UK's third-largest estate agency network) in 2024.",
    color: "text-fuchsia-400",
  },
  {
    name: "ANTONIOS KOZAKIS",
    role: "SALES DIRECTOR",
    image: placeholderImage,
    linkedin: "#",
    description:
      "He is a seasoned residential property expert with extensive experience managing call centres, streamlining customer service operations and leading high-performing teams. As Area Sales Director at Leaders Group (LRG)—the UK's third-largest estate agency network—he drove regional sales growth, mentored multiple teams and consistently exceeded targets in both lettings and sales.",
    color: "text-pink-400",
  },
  {
    name: "TOM DAVIES",
    role: "MARKETING DIRECTOR",
    image: placeholderImage,
    linkedin: "#",
    description:
      "Tom is a marketing professional with extensive experience in residential property. He has served as Marketing Director at one of the UK's largest estate agency networks, overseeing digital campaigns and operations across multiple regions.",
    color: "text-pink-500",
  },
];

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayDelay = 5000;

  // Number of cards to show based on screen width
  const [cardsToShow, setCardsToShow] = useState(3);

  // Update cards to show based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else if (window.innerWidth < 1440) {
        setCardsToShow(3);
      } else {
        setCardsToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        next();
      }, autoplayDelay);
    }
    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  // Touch handlers for mobile swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      next();
    }

    if (touchStart - touchEnd < -50) {
      prev();
    }
  };

  // Calculate the maximum valid index based on number of cards to show
  const maxIndex = Math.max(0, teamMembers.length - cardsToShow);

  // Navigation functions
  const next = () => {
    setCurrentIndex(prevIndex => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  // Pagination dots
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i <= maxIndex; i++) {
      dots.push(
        <button
          key={i}
          onClick={() => setCurrentIndex(i)}
          className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
            i === currentIndex ? 'bg-pink-500 w-4' : 'bg-white/30'
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      );
    }
    return dots;
  };

  // Visible cards based on current index
  const visibleCards = teamMembers.slice(
    currentIndex,
    Math.min(currentIndex + cardsToShow, teamMembers.length)
  );

  // Calculate width for each card based on cards to show
  const cardWidth = 100 / cardsToShow;

  return (
    <section className="w-full bg-gradient-to-tr from-[#1c1b2d] to-[#06121e] py-24 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="text-xs text-white/70 uppercase font-medium tracking-wider">THE TEAM</p>
          <h2 className="text-[24px] md:text-[32px] font-bold text-white mt-1 tracking-tight">
            PEOPLE BEHIND THE SCENES
          </h2>
        </div>

        {/* Carousel container with relative positioning */}
        <div 
          className="relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {/* Cards container with overflow hidden */}
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                width: `${(teamMembers.length / cardsToShow) * 100}%`
              }}
            >
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="px-4"
                  style={{ width: `${cardWidth}%` }}
                >
                  <div
                    className="bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-[24px] overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-[340px] object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay text that appears on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <p className="text-xs text-white/90 leading-snug transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          {member.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-5 text-white">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold tracking-wide uppercase">
                          {member.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="text-white hover:text-pink-400 transition-colors"
                            >
                              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.25 11.28h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v5.5h-3v-10h3v1.39c.83-1.02 2.08-1.39 3.31-1.39 2.48 0 4.5 2.02 4.5 4.5v5.5z" />
                            </svg>
                          </a>
                          <span className={`text-xs font-semibold ${member.color}`}>
                            {member.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all duration-300 backdrop-blur-sm z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-all duration-300 backdrop-blur-sm z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8">
            {renderDots()}
          </div>
        </div>
      </div>
    </section>
  );
}