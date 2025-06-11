import React from "react";
// Import Math.PI if needed

import toprightellipse from "../../assets/images/services section background  top.png"; // Placeholder for the top-right image/shape
import ellipseleft from "../../assets/images/services section background  left.png"; // Placeholder for the left image/shape
import pinkmodernproperty from "../../assets/images/first card image.png"; // Placeholder for the pink modern property image
import firstCardIcon from "../../assets/images/first card icon.png"; // Import first card icon
import secondCardIcon from "../../assets/images/second card icon.png"; // Import second card icon
import thirdCardIcon from "../../assets/images/third card icon.png"; // Import third card icon
import fourthCardIcon from "../../assets/images/fourthicon.png"; // Import fourth card icon
const ServicesSection = () => {
  return (    <div className="relative w-full bg-gray-900 text-white py-0 md:py-20 overflow-hidden">
      {/* Background ellipse image at the top right */}      <div className="absolute top-0 right-0 w-1/2 overflow-hidden">
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
      
      <div className="container mx-auto px-4 sm:px-6 xl:px-12 relative z-10 max-w-7xl">        {/* Section header */}
        <div className="mb-16 pt-8 lg:pt-12" data-aos="fade-up">
          <p className="text-sm uppercase text-[#FF0077] mb-2 tracking-wider font-medium">WHAT WE DO</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">THE DIFFERENCE</h2>
          <div className="w-20 h-1 bg-[#FF0077] mt-4"></div>
        </div>
        {/* Services grid - restructured for proper layout */}        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-8">          {/* Property image - takes up full height and first position */}          <div 
            className="lg:col-span-1 h-[525px] p-0 bg-[#00000080] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 transform transition-transform hover:scale-[1.02] duration-300"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img 
              src={pinkmodernproperty} 
              alt="Pink modern property" 
              className="w-full h-full object-cover"
              style={{ 
                display: 'block', 
                width: '100%', 
                height: '100%',
                borderRadius: 'inherit',
                objectPosition: 'center'
              }}
            />
          </div>
          
          {/* 2x2 Grid for the 4 service cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {/* No wallet needed */}              <div 
                className="bg-[#00000080] backdrop-blur-sm p-8 rounded-2xl border border-white/20 transform transition-transform hover:translate-y-[-5px] duration-300 relative overflow-hidden group h-[250px]"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF0077]/0 via-[#FF0077]/0 to-[#FF0077]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="uppercase text-sm font-bold mb-4 text-white">NO WALLET NEEDED</h3>
                <p className="text-white/80 text-sm font-light leading-relaxed">
                  Never had a crypto wallet? No problem! We offer a secure login and our system remembers you.
                </p>
                <div className="absolute bottom-6 right-6 w-16 h-16">
                  <img src={firstCardIcon} alt="No Wallet Needed Icon" className="w-full h-full object-contain" />
                </div>
              </div>{/* Fully regulated */}              <div 
                className="bg-[#00000080] backdrop-blur-sm p-8 rounded-2xl border border-white/20 transform transition-transform hover:translate-y-[-5px] duration-300 relative overflow-hidden group h-[250px]"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF0077]/0 via-[#FF0077]/0 to-[#FF0077]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="uppercase text-sm font-bold mb-4 text-white">FULLY REGULATED</h3>
                <p className="text-white/80 text-sm font-light leading-relaxed">
                  PropsShare is fully regulated, holding all needed permissions and adhering to all required MLR/KYC and anti-fraud rules.
                </p>
                <div className="absolute bottom-6 right-6 w-16 h-16">
                  <img src={secondCardIcon} alt="Fully Regulated Icon" className="w-full h-full object-contain" />
                </div>
              </div>{/* Blockchain secured */}              <div 
                className="bg-[#00000080] backdrop-blur-sm p-8 rounded-2xl border border-white/20 transform transition-transform hover:translate-y-[-5px] duration-300 relative overflow-hidden group h-[250px]"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF0077]/0 via-[#FF0077]/0 to-[#FF0077]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="uppercase text-sm font-bold mb-4 text-white">BLOCKCHAIN SECURED</h3>
                <p className="text-white/80 text-sm font-light leading-relaxed">
                  PropsShare is secured by blockchain technology. Property records are digital, authenticated and can be audited.
                </p>
                <div className="absolute bottom-6 right-6 w-16 h-16">
                  <img src={thirdCardIcon} alt="Blockchain Secured Icon" className="w-full h-full object-contain" />
                </div>
              </div>{/* We pay your fees */}              <div 
                className="bg-[#00000080] backdrop-blur-sm p-8 rounded-2xl border border-white/20 transform transition-transform hover:translate-y-[-5px] duration-300 relative overflow-hidden group h-[250px]"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF0077]/0 via-[#FF0077]/0 to-[#FF0077]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="uppercase text-sm font-bold mb-4 text-white">WE PAY YOUR FEES</h3>
                <p className="text-white/80 text-sm font-light leading-relaxed">
                  PropsShare covers all your Ethereum gas, network, blockchain and contract fees for transaction costs.
                </p>
                <div className="absolute bottom-6 right-6 w-16 h-16">
                  <img src={fourthCardIcon} alt="We Pay Your Fees Icon" className="w-full h-full object-contain" />
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