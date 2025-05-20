import React from 'react';
import propShareLogo from '../../assets/images/logo.png'
import'./footer.css'

const MainFooter = () => {
  return (
    <footer className="footer text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center pb-6">
        {/* Left Section: Logo and Copyright */}
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <img src={propShareLogo} alt="propShare Logo" className="h-11 mb-2" />

        </div>

        {/* Center Section: Navigation Links */}
        <div className="flex gap-12 mb-6 md:mb-0">
          <div>
            <ul className="space-y-3">
              <li><a href="#" className="text-white-400 hover:text-white text-s uppercase">Docs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs uppercase">Roadmap</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs uppercase">Litepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs uppercase">Whitepaper</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li><a href="#" className="text-white-400 hover:text-white text-s uppercase">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs uppercase">Legal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs uppercase">Medium</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4">
              <li><a href="#" className="text-white-400 hover:text-white text-s uppercase">Company</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs uppercase">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs uppercase">IP</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-xs uppercase">Properties</a></li>
            </ul>
          </div>
        </div>
      </div>
<hr className="border-t-2 border-[#1d2136] w-full my-4" />
        {/* Right Section: Social Media Icons */}
        <div className="flex gap-12 mx-auto w-full max-w-7xl px-4 flex-col md:flex-row justify-between ">
  {/* Left Section: Copyright Text */}
  <div className="flex items-start">
    <p className="text-xs text-gray-400 mt-2">©2025 propShare. All Rights Reserved.</p>
  </div>

  {/* Right Section: Social Media Icons */}
<div className="flex gap-3">
          <a href="#" className="grayscale hover:grayscale-0">
            <div className="bg-gray-700 rounded-full p-1">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
          </a>
          <a href="#" className="grayscale hover:grayscale-0">
            <div className="bg-gray-700 rounded-full p-1">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20.447 3.024c-.714.317-1.48.53-2.285.625a3.983 3.983 0 001.773-2.196 7.953 7.953 0 01-2.518.964A3.991 3.991 0 0012.026 2c-2.23 0-4.038 1.807-4.038 4.038 0 .316.036.625.106.921-3.356-.168-6.333-1.777-8.314-4.224-.35.6-.55 1.298-.55 2.04 0 1.407.715 2.65 1.8 3.375a3.989 3.989 0 01-1.806-.5v.05c0 1.948 1.386 3.573 3.23 3.943a3.996 3.996 0 01-1.805.068c.51 1.59 1.987 2.746 3.735 2.78a7.99 7.99 0 01-4.936 1.697c-.32 0-.637-.019-.948-.056a11.34 11.34 0 006.145 1.8c7.38 0 11.42-6.113 11.42-11.42 0-.174-.004-.347-.012-.52.784-.565 1.464-1.27 2.002-2.076z"/>
              </svg>
            </div>
          </a>
          <a href="#" className="grayscale hover:grayscale-0">
            <div className="bg-gray-700 rounded-full p-1">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>
          </a>
          <a href="#" className="grayscale hover:grayscale-0">
            <div className="bg-gray-700 rounded-full p-1">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.618 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.149-3.252 1.659-4.771 4.919-4.919 1.265-.058 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.665.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.665.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.665-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.282.073-1.689.073-4.948 0-3.259-.014-3.665-.072-4.947-.2-4.358-2.625-6.78-6.979-6.98-1.283-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
          </a>
        </div>  
</div>
    </footer>
  );
};

export default MainFooter;