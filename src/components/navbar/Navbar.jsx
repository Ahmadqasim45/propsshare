import React, { useState, useEffect } from "react";
import navbarLogo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check scroll position for styling changes
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
        const sections = [
        { id: "home", ref: document.getElementById("home") },
        { id: "services", ref: document.getElementById("services") },
        { id: "howItWorks", ref: document.getElementById("howItWorks") },
        { id: "market", ref: document.getElementById("market") },
        { id: "team", ref: document.getElementById("team") },
        { id: "governance", ref: document.getElementById("governance") },
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
            </button>            <button
              onClick={() => scrollToSection('howItWorks')}
              className={`font-montserrat font-light text-[13px] leading-6 ${activeSection === 'howItWorks' ? 'text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-pink-500' : 'text-white/70 hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-pink-500 after:transition-all after:duration-300'} whitespace-nowrap`}
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
          <div className="flex items-center space-x-6 shrink-0">            {/* Telegram icon */}
            <a
              href="https://t.me/propshare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Join our Telegram group"
            >
              <FontAwesomeIcon icon={faTelegram} className="h-5 w-5" />
            </a>

            {/* X (Twitter) icon */}
            <a
              href="https://x.com/propshare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Follow us on X (Twitter)"
            >
              <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5" />
            </a>{/* CTA Button */}
            <a
              href="#waitlist"
              onClick={(e) => {e.preventDefault(); scrollToSection('resources')}}
              className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-[13px] font-montserrat font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 shadow-sm"
            >
              Join the waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* Updated Mobile and Tablet Navbar - Only visible on smaller screens (below md breakpoint) */}
      <nav className={`fixed top-0 left-0 right-0 md:hidden px-4 py-3 h-16 flex items-center justify-between z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-black shadow-lg" 
            : "bg-black/80 backdrop-blur-lg"
        }`}>
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <img
              src={navbarLogo}
              alt="propsShare Logo"
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>        {/* Mobile CTA button (smaller) */}
        <div className="flex items-center space-x-3">          {/* Telegram icon - smaller on mobile */}
          <a
            href="https://t.me/propshare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-300"
            aria-label="Join our Telegram group"
          >
            <FontAwesomeIcon icon={faTelegram} className="h-4 w-4" />
          </a>
          
          {/* X/Twitter icon - smaller on mobile */}
          <a
            href="https://x.com/propshare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-300 mr-1"
            aria-label="Follow us on X (Twitter)"
          >
            <FontAwesomeIcon icon={faXTwitter} className="h-4 w-4" />
          </a>

          {/* Mobile menu button with animation */}
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className={`h-6 w-6 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}
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

        {/* Mobile menu dropdown with enhanced animations */}
        <div
          className={`absolute top-full left-0 right-0 bg-black transition-all duration-500 ease-in-out ${
            mobileMenuOpen
              ? "max-h-[450px] opacity-100 shadow-2xl"
              : "max-h-0 opacity-0 pointer-events-none"
          } overflow-hidden`}
        >
          <div className={`flex flex-col space-y-6 p-6 transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-8"
          }`}>            {/* Menu items with slide-in animation */}            {[
              { id: 'home', label: 'HOME' },
              { id: 'services', label: 'WHAT WE DO' },
              { id: 'howItWorks', label: 'HOW IT WORKS' },
              /* Both HOW IT WORKS and ROADMAP point to the same section */
              { id: 'howItWorks', label: 'ROADMAP' },
              { id: 'market', label: 'MARKET' },
              { id: 'team', label: 'TEAM' },
              { id: 'resources', label: 'RESOURCES' }
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-montserrat font-light text-[13px] ${
                  activeSection === item.id 
                    ? 'text-white relative after:absolute after:bottom-[-4px] after:left-1/2 after:transform after:-translate-x-1/2 after:h-[2px] after:w-8 after:bg-pink-500' 
                    : 'text-white/70 hover:text-white transition-colors'
                } text-center transition-all duration-300 ease-in-out ${
                  mobileMenuOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ 
                  transitionDelay: mobileMenuOpen ? `${index * 75}ms` : '0ms'
                }}
              >
                {item.label}
              </button>
            ))}
            
            {/* CTA Button with bounce animation */}
            <div 
              className={`flex items-center justify-center pt-4 transition-all duration-500 ease-in-out ${
                mobileMenuOpen 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: mobileMenuOpen ? '500ms' : '0ms' }}
            >              <a
                href="#waitlist"
                onClick={(e) => {e.preventDefault(); scrollToSection('resources'); setMobileMenuOpen(false);}}
                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-[13px] font-montserrat font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105 w-full"
              >
                Join the waitlist
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for background when menu is open */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-500 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;