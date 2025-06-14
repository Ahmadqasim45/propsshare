import React, { useState, useEffect } from "react";
import navbarLogo from "../../assets/images/logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "home", ref: document.getElementById("home") },
        { id: "services", ref: document.getElementById("services") },
        { id: "howItWorks", ref: document.getElementById("howItWorks") },
        { id: "roadmap", ref: document.getElementById("roadmap") },
        { id: "market", ref: document.getElementById("market") },
        { id: "team", ref: document.getElementById("team") },
        { id: "resources", ref: document.getElementById("resources") },
      ];

      // Get current scroll position
      const scrollPosition = window.scrollY + 100; // Adding offset for navbar height

      // Find the current active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref) {
          const offsetTop = section.ref.offsetTop;
          
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Call once to set initial active section
    handleScroll();

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for navbar height
        behavior: "smooth"
      });
      setActiveSection(sectionId);
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      {/* Desktop Navbar - Only visible on desktop (md and larger) */}
      <nav className="fixed top-8 left-10 right-10 px-6 py-0 h-16 hidden md:flex items-center rounded-full bg-gradient-to-b from-gray-90/50 to-gray-900/80 backdrop-blur-sm border border-gray-700/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-50">
        <div className="w-full flex items-center justify-between h-full">
          {/* Logo - Left aligned */}
          <div className="flex items-center space-x-3 shrink-0">
            <div className="flex items-center">
              <img
                src={navbarLogo}
                alt="propsShare Logo"
                className="h-9 w-auto object-contain"
              />
            </div>
          </div>          {/* Desktop Navigation - Centered */}
          <div className="flex items-center justify-center flex-1 space-x-8 px-4">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-montserrat font-light text-[13px] leading-6 ${activeSection === 'home' ? 'text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-pink-500' : 'text-white/70 hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-pink-500 after:transition-all after:duration-300'} whitespace-nowrap`}
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`font-montserrat font-light text-[13px] leading-6 ${activeSection === 'services' ? 'text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-pink-500' : 'text-white/70 hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-pink-500 after:transition-all after:duration-300'} whitespace-nowrap`}
            >
              WHAT WE DO
            </button>
            <button
              onClick={() => scrollToSection('howItWorks')}
              className={`font-montserrat font-light text-[13px] leading-6 ${activeSection === 'howItWorks' ? 'text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-pink-500' : 'text-white/70 hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-pink-500 after:transition-all after:duration-300'} whitespace-nowrap`}
            >
              HOW IT WORKS
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className={`font-montserrat font-light text-[13px] leading-6 ${activeSection === 'roadmap' ? 'text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-pink-500' : 'text-white/70 hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-pink-500 after:transition-all after:duration-300'} whitespace-nowrap`}
            >
              ROADMAP
            </button>
            <button
              onClick={() => scrollToSection('market')}
              className={`font-montserrat font-light text-[13px] leading-6 ${activeSection === 'market' ? 'text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-pink-500' : 'text-white/70 hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-pink-500 after:transition-all after:duration-300'} whitespace-nowrap`}
            >
              MARKET
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className={`font-montserrat font-light text-[13px] leading-6 ${activeSection === 'team' ? 'text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-pink-500' : 'text-white/70 hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-pink-500 after:transition-all after:duration-300'} whitespace-nowrap`}
            >
              TEAM
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className={`font-montserrat font-light text-[13px] leading-6 ${activeSection === 'resources' ? 'text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-pink-500' : 'text-white/70 hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-pink-500 after:transition-all after:duration-300'} whitespace-nowrap`}
            >
              RESOURCES
            </button>
          </div>

          {/* Right section with icons and CTA */}
          <div className="flex items-center space-x-6 shrink-0">
            {/* Telegram icon */}
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 2L11 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 2L15 22L11 13L2 9L22 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Twitter/X icon */}
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* CTA Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-[13px] font-montserrat font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 shadow-sm"
            >
              Join the waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile and Tablet Navbar - Only visible on smaller screens (below md breakpoint) */}
      <nav className="fixed top-4 left-4 right-4 md:hidden px-4 py-0 h-14 flex items-center justify-between rounded-full bg-gradient-to-b from-gray-900/90 to-gray-800/80 backdrop-blur-sm border border-gray-700/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-50">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <img
              src={navbarLogo}
              alt="propsShare Logo"
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>

        {/* Mobile CTA button (smaller) */}
        <div className="flex items-center space-x-3">
          {/* Telegram icon - smaller on mobile */}
          <a
            href="#"
            className="text-white/70 hover:text-white transition-colors"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 2L11 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 2L15 22L11 13L2 9L22 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-white/70 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`absolute top-full left-0 right-0 mt-2 px-4 py-4 bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700/30 transition-all duration-300 ease-in-out transform ${
            mobileMenuOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >          <div className="flex flex-col space-y-5 px-2 text-center">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-montserrat font-light text-[13px] leading-6 ${activeSection === 'home' ? 'text-white' : 'text-white/70 hover:text-white transition-colors'} text-center`}
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`font-montserrat font-light text-[13px] leading-6 ${activeSection === 'services' ? 'text-white' : 'text-white/70 hover:text-white transition-colors'} text-center`}
            >
              WHAT WE DO
            </button>
            <button
              onClick={() => scrollToSection('howItWorks')}
              className={`font-montserrat font-light text-[13px] leading-6 ${activeSection === 'howItWorks' ? 'text-white' : 'text-white/70 hover:text-white transition-colors'} text-center`}
            >
              HOW IT WORKS
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className={`font-montserrat font-light text-[13px] leading-6 ${activeSection === 'roadmap' ? 'text-white' : 'text-white/70 hover:text-white transition-colors'} text-center`}
            >
              ROADMAP
            </button>
            <button
              onClick={() => scrollToSection('market')}
              className={`font-montserrat font-light text-[13px] leading-6 ${activeSection === 'market' ? 'text-white' : 'text-white/70 hover:text-white transition-colors'} text-center`}
            >
              MARKET
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className={`font-montserrat font-light text-[13px] leading-6 ${activeSection === 'team' ? 'text-white' : 'text-white/70 hover:text-white transition-colors'} text-center`}
            >
              TEAM
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className={`font-montserrat font-light text-[13px] leading-6 ${activeSection === 'resources' ? 'text-white' : 'text-white/70 hover:text-white transition-colors'} text-center`}
            >
              RESOURCES
            </button>
            <div className="flex items-center justify-center pt-2">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-[13px] font-montserrat font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 shadow-sm w-full"
              >
                Join the waitlist
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
