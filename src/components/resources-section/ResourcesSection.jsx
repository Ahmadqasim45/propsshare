import React from 'react';
import groupBg from "../../assets/images/group-bg.png"; // Vertical lines background image

const ResourcesSection = () => {
  return (    <section className="bg-primary text-white py-24 relative overflow-hidden">
      {/* Vertical lines background */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute w-full h-full">
          <img src={groupBg} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-[#A1A1A1]">Files</p>
          <h2 className="text-4xl font-bold uppercase tracking-wide text-white">Resources</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Whitepaper Card */}
          <div className="bg-[#1A1F2B] border-2 border-[#FF2D55] rounded-[20px] p-6">
            <h3 className="text-lg font-semibold uppercase mb-4 text-white">Whitepaper</h3>
            <p className="text-sm leading-6 text-[#E0E0E0]">
              Ready to dive deeper? Download our whitepaper now for an in-depth look at
              PropShare's innovative platform, tokenized real-world assets, and how we're
              shaping the future of decentralized finance. Your guide to secure, transparent
              investing is just one click away—get your copy today!
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-[#FF2D55] text-white font-medium uppercase text-sm py-2.5 px-6 rounded-[20px] hover:bg-opacity-90 transition"
              >
                Download
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Litepaper Card */}
          <div className="bg-[#1A1F2B] border-2 border-[#00F5FF] rounded-[20px] p-6">
            <h3 className="text-lg font-semibold uppercase mb-4 text-white">Litepaper</h3>
            <p className="text-sm leading-6 text-[#E0E0E0]">
              Ready to dive a bit deeper? Download our Litepaper to explore how PropShare
              combines full regulatory compliance, blockchain security, and zero gas fees to
              revolutionize tokenized real-world asset investing. Get your free copy now and
              unlock the future of digital finance!
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-[#00F5FF] text-black font-medium uppercase text-sm py-2.5 px-6 rounded-[20px] hover:bg-opacity-90 transition"
              >
                Download
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Roadmap Card */}
          <div className="bg-[#1A1F2B] border-2 border-[#007BFF] rounded-[20px] p-6">
            <h3 className="text-lg font-semibold uppercase mb-4 text-white">Roadmap</h3>
            <p className="text-sm leading-6 text-[#E0E0E0]">
              Download our roadmap today to see what's coming next: get an exclusive look at
              upcoming features, timelines, and milestones—empowering you to plan ahead and
              stay one step ahead in the world of tokenized assets.
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-[#007BFF] text-white font-medium uppercase text-sm py-2.5 px-6 rounded-[20px] hover:bg-opacity-90 transition"
              >
                Download
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Join Our Community Button */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-[#A1A1A1] mb-4">Join us</p>
          <a
            href="#"
            className="inline-flex items-center justify-center bg-[#FF2D55] text-white font-medium uppercase text-base py-3 px-8 rounded-[20px] hover:bg-opacity-90 transition"
          >
            Our Community
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4">
          <a href="#" className="grayscale hover:grayscale-0">
            <div className="bg-[#2A2F45] rounded-full p-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
          </a>
          <a href="#" className="grayscale hover:grayscale-0">
            <div className="bg-[#2A2F45] rounded-full p-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 3.024c-.714.317-1.48.53-2.285.625a3.983 3.983 0 001.773-2.196 7.953 7.953 0 01-2.518.964A3.991 3.991 0 0012.026 2c-2.23 0-4.038 1.807-4.038 4.038 0 .316.036.625.106.921-3.356-.168-6.333-1.777-8.314-4.224-.35.6-.55 1.298-.55 2.04 0 1.407.715 2.65 1.8 3.375a3.989 3.989 0 01-1.806-.5v.05c0 1.948 1.386 3.573 3.23 3.943a3.996 3.996 0 01-1.805.068c.51 1.59 1.987 2.746 3.735 2.78a7.99 7.99 0 01-4.936 1.697c-.32 0-.637-.019-.948-.056a11.34 11.34 0 006.145 1.8c7.38 0 11.42-6.113 11.42-11.42 0-.174-.004-.347-.012-.52.784-.565 1.464-1.27 2.002-2.076z"/>
              </svg>
            </div>
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;  