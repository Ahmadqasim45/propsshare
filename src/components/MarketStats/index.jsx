import React from "react";
import globe from "../../assets/images/globe.png"; // Placeholder for the globe image
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16 pt-12" data-aos="fade-up">
          <div className="text-xs md:text-sm uppercase tracking-wider text-gray-400">
            WHAT WE SEE
          </div>
          <div className="text-2xl md:text-3xl font-bold">
            MARKET STATISTICS
          </div>
        </div>        {/* Mobile view - stack cards vertically */}
        <div className="md:hidden flex flex-col gap-6">
          <div className="w-full" data-aos="fade-up" data-aos-delay="200">
            <div
              className="bg-transparent rounded-2xl border border-opacity-80 py-6 px-5"
              style={{ borderColor: "#E693F2", backdropFilter: "blur(3px)" }}
            >
              <h3 className="text-md font-semibold mb-2">Socially Rented</h3>
              <p className="text-sm text-gray-300">
                There are currently around 4.9 million being rented in the UK
                social sector.
              </p>
            </div>
          </div>

          {/* Mobile Globe */}
          <div className="w-full flex justify-center my-4">
            <div className="w-64 h-64 rounded-full overflow-hidden">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${globe})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>

          <div className="w-full">
            <div
              className="bg-transparent rounded-2xl border border-opacity-80 py-6 px-5"
              style={{ borderColor: "#E693F2", backdropFilter: "blur(3px)" }}
            >
              <h3 className="text-md font-semibold mb-2">
                Residentially Owned
              </h3>
              <p className="text-sm text-gray-300">
                There are currently around 19.0 million properties owned
                privately in the UK.
              </p>
            </div>
          </div>

          <div className="w-full">
            <div
              className="bg-transparent rounded-2xl border border-opacity-80 py-6 px-5"
              style={{ borderColor: "#E693F2", backdropFilter: "blur(3px)" }}
            >
              <h3 className="text-md font-semibold mb-2">
                Privately Rented Properties
              </h3>
              <p className="text-sm text-gray-300">
                There are currently around 5.6 million properties being
                privately rented in the state of London UK.
              </p>
            </div>
          </div>

          <div className="w-full">
            <div
              className="bg-transparent rounded-2xl border border-opacity-80 py-6 px-5"
              style={{ borderColor: "#E693F2", backdropFilter: "blur(3px)" }}
            >
              <h3 className="text-md font-semibold mb-2">Growth</h3>
              <p className="text-sm text-gray-300">
                Generally accepted that the UK needs in excess of 300k new homes
                annually à 1.5 million over the next 5 years.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop view with Globe and Cards */}
        <div className="hidden md:block relative h-[700px] lg:h-[800px] xl:h-[850px]">
          {/* Globe in center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
            <div className="globe w-full h-full rounded-full overflow-hidden">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${globe})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>

          {/* Cards Container */}
          <div className="absolute inset-0">
            {/* Top Left Card */}
            <div className="absolute top-[5%] md:top-[10%] lg:top-[8%] left-[5%] md:left-[10%] lg:left-[18%] w-64 md:w-72 lg:w-80">
              <div
                className="bg-transparent rounded-2xl border border-opacity-80 py-8 px-6 md:py-10 md:px-8 lg:py-12 lg:px-11"
                style={{ borderColor: "#E693F2", backdropFilter: "blur(3px)" }}
              >
                <h3 className="text-md font-semibold mb-2 md:mb-3">
                  Socially Rented
                </h3>
                <p className="text-xs md:text-sm text-gray-300">
                  There are currently around 4.9 million being rented in the UK
                  social sector.
                </p>
              </div>
            </div>

            {/* Top Right Card */}
            <div className="absolute top-[5%] md:top-[10%] lg:top-[8%] right-[5%] md:right-[10%] lg:right-[18%] w-64 md:w-72 lg:w-80">
              <div
                className="bg-transparent rounded-2xl border border-opacity-80 py-8 px-6 md:py-10 md:px-8 lg:py-12 lg:px-11"
                style={{ borderColor: "#E693F2", backdropFilter: "blur(3px)" }}
              >
                <h3 className="text-md font-semibold mb-2 md:mb-3">
                  Residentially Owned
                </h3>
                <p className="text-xs md:text-sm text-gray-300">
                  There are currently around 19.0 million properties owned
                  privately in the UK.
                </p>
              </div>
            </div>

            {/* Bottom Left Card */}
            <div className="absolute bottom-[5%] md:bottom-[10%] lg:top-[37%] left-[5%] md:left-[10%] lg:left-[8%] w-64 md:w-72 lg:w-80">
              <div
                className="bg-transparent rounded-2xl border border-opacity-80 py-8 px-6 md:py-10 md:px-8 lg:py-12 lg:px-11"
                style={{ borderColor: "#E693F2", backdropFilter: "blur(3px)" }}
              >
                <h3 className="text-md font-semibold mb-2 md:mb-3">
                  Privately Rented Properties
                </h3>
                <p className="text-xs md:text-sm text-gray-300">
                  There are currently around 5.6 million properties being
                  privately rented in the state of London UK.
                </p>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="absolute bottom-[5%] md:bottom-[10%] lg:top-[37%] right-[5%] md:right-[10%] lg:right-[8%] w-64 md:w-72 lg:w-80">
              <div
                className="bg-transparent rounded-2xl border border-opacity-80 py-8 px-6 md:py-10 md:px-8 lg:py-12 lg:px-11"
                style={{ borderColor: "#E693F2", backdropFilter: "blur(3px)" }}
              >
                <h3 className="text-md font-semibold mb-2 md:mb-3">Growth</h3>
                <p className="text-xs md:text-sm text-gray-300">
                  Generally accepted that the UK needs in excess of 300k new
                  homes annually à 1.5 million over the next 5 years.
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
