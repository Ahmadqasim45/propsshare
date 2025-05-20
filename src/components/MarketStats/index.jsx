import React from 'react';
import globe from '../../assets/images/globe.png'; // Placeholder for the globe image
import groupBg from "../../assets/images/group-bg.png"; // Placeholder for the group background image

const MarketStats = () => {
  return (
    <div className="min-h-screen bg-primary text-white ">
      {/* Background gradient lines */}
      <div className="absolute top-[220%] inset-0 opacity-30 z-0">
        <div className="absolute w-full h-full">
         <img src={groupBg} alt="" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-sm uppercase tracking-wider text-gray-400">WHAT WE SEE</div>
          <div className="text-3xl font-bold">MARKET STATISTICS</div>
        </div>
        
        {/* Content with Globe and Cards - using grid for better positioning */}
        <div className="relative h-[600px] sm:h-[700px] md:h-[800px] flex items-center justify-center">
          {/* Globe in center - absolute positioned in center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-100 h-96 md:w-80 md:h-80 lg:w-96 lg:h-96 ">
            <div className="globe w-full h-full rounded-full overflow-hidden" 
                 >
              {/* Globe background with world map */}
              <div className="w-full h-full" style={{
                backgroundImage: `url(${globe})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}></div>

            </div>
          </div>
          
          {/* Cards Container - with absolute positioning for exact placement */}
          <div className="absolute inset-2 z-1">
            {/* Top Left Card */}
            <div className="absolute top-[6%] left-[5%] sm:left-[12%] md:left-[15%] lg:left-[18%] w-75 md:w-80">
              <div className="bg-transparent rounded-2xl border border-opacity-80 py-12 px-11" style={{ borderColor: "#E693F2", backdropFilter: "blur(3px)" }}>
                <h3 className="text-md font-semibold mb-3">Socially Rented</h3>
                <p className="text-sm text-gray-300">
                  There are currently around 4.9 million being rented in the UK social sector.
                </p>
              </div>
            </div>
            
            {/* Top Right Card */}
            <div className="absolute top-[6%] right-[5%] sm:right-[12%] md:right-[15%] lg:right-[18%] w-75 md:w-80">
              <div className="bg-transparent rounded-2xl border border-opacity-80 py-12 px-11" style={{ borderColor: "#E693F2", backdropFilter: "blur(3px)" }}>
                <h3 className="text-md font-semibold mb-3">Residentially Owned</h3>
                <p className="text-sm text-gray-300">
                  There are currently around 19.0 million properties owned privately in the UK.
                </p>
              </div>
            </div>
            
            {/* Bottom Left Card */}
            <div className="absolute top-[37%] left-[14%] sm:left-[12%] md:left-[15%] lg:left-[8%] w-75 md:w-80">
              <div className="bg-transparent rounded-2xl border border-opacity-80 py-12 px-11" style={{ borderColor: "#E693F2", backdropFilter: "blur(3px)" }}>
                <h3 className="text-md font-semibold mb-3">Privately Rented Properties</h3>
                <p className="text-sm text-gray-300">
                  There are currently around 5.6 million properties being privately rented in the state of London UK.
                </p>
              </div>
            </div>
            
            {/* Bottom Right Card */}
            <div className="absolute top-[37%] right-[5%] sm:right-[12%] md:right-[15%] lg:right-[8%] w-75 md:w-80">
              <div className="bg-transparent rounded-2xl border border-opacity-80 py-12 px-11" style={{ borderColor: "#E693F2", backdropFilter: "blur(3px)" }}>
                <h3 className="text-md font-semibold mb-3">Growth</h3>
                <p className="text-sm text-gray-300">
                  Generally accepted that the UK needs in excess of 300k new homes annually à 1.5 million over the next 5 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketStats;